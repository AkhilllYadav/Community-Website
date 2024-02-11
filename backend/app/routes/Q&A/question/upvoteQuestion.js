const to = require('await-to-js').default;
const question = require('../../../models/question');
const { ErrorHandler } = require('../../../../helpers/error');
const constants = require('../../../../constants');

module.exports = async (req, res, next) => {
  const { questionId } = req.body;
  const [err] = await to(question.updateOne({ _id: questionId }, { $inc: { upvotes: 1 } }));
  if (err) {
    const error = new ErrorHandler(constants.ERRORS.DATABASE, {
      statusCode: 500,
      message: 'Database Error',
      errStack: err,
    });

    return next(error);
  }

  res.status(200).send({
    message: 'Question has been upvoted',
  });
  return next();
};
