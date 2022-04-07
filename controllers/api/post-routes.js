const router = require('express').Router();
const Post = require('../../models/Post');

// get ALL Posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    // ADD BCRYPT HERE
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
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;