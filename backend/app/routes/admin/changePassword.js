const to = require('await-to-js').default;
const argon2 = require('argon2');
const Admin = require('../../models/Admin');
const { ErrorHandler } = require('../../../helpers/error');
const constants = require('../../../constants');

module.exports = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const userRecord = await Admin.findOne({
    email: res.locals.decode.email,
  });
  const isPasswordCorrect = await argon2.verify(
    userRecord.passwordHash,
    oldPassword
  );
  if (!isPasswordCorrect) {
    const error = new ErrorHandler(constants.ERRORS.INPUT, {
      statusCode: 400,
      message: 'Wrong old password',
      user: userRecord.email,
      errStack: 'Auth Login',
    });
    return next(error);
  }

  const hashedPassword = await argon2.hash(newPassword);

  const [err, user] = await to(
    Admin.findOne({ email: userRecord.email }, () => {
      userRecord.passwordHash = hashedPassword;
      userRecord.save();
    })
  );

  if (err) {
    if (err.code === 11000) {
      const error = new ErrorHandler(constants.ERRORS.INPUT, {
        statusCode: 400,
        message: 'Bad request: User already exists',
        user: userRecord.email,
        errStack: err,
      });
      return next(error);
    }
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Mongo Error: Insertion Failed',
      errStack: err,
      user: userRecord.email,
    });
    return next(error);
  }

  //   eslint-disable-next-line no-underscore-dangle
  const response = { ...user._doc };
  delete response.passwordHash;
  res.status(200).send(response);
  return next();
};
