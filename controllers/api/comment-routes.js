const router = require('express').Router();
const Comment = require('../../models/Comment');

// Get ALL Comments
router.get('/', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({});
    if (!dbCommentData) {
      res.json('No comments');
    } else {
      res.json(dbCommentData);
    };
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create Post
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.comment,
      user_id: req.body.userId,
      post_id: req.body.postId
    }, req.body);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;