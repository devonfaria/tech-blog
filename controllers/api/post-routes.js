const router = require('express').Router();
const { Comment, User, Post } = require('../../models');

// Get ALL Posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{
        model: User
      }, {
        model: Comment
      }]
    });
    if (!postData) {
      res.json('No posts');
    } else {
      res.json(postData);
    };
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create Post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    }, req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Post by ID
router.delete('/', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.body.postId
      }
    });
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;