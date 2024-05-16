const router = require('express').Router({ mergeParams: true });
const postQuestion = require('./post');
const { QuestionValidationSchema, updateQuestionStatusSchema } = require('./@validationSchema');
const getAllQuestion = require('./getAllQuestion');
const getQuestionById = require('./getQuestionById');
const validation = require('../../../../helpers/middlewares/validation');
const upvoteQuestion = require('./upvoteQuestion');
const downvoteQuestion = require('./downvoteQuestion');
const updateQuestionStatus = require('./updateQuestionStatus');

router.post('/', validation(QuestionValidationSchema), postQuestion);

// This route will give all questions from db
router.get('/getallquestions', getAllQuestion);

// This route will give question by given id
router.get('/:getQuestionById', getQuestionById);

// This route will increase upvote by one.
router.patch('/upvote', upvoteQuestion);

// This route will decrease upvote by one.
router.patch('/downvote', downvoteQuestion);

// route for updating the question status
router.patch('/updateStatus', validation(updateQuestionStatusSchema), updateQuestionStatus);

module.exports = router;
