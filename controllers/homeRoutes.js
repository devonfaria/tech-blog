const Post = require('../models/Post');
const router = require('express').Router();
const serialize = require('../utils/serialize');

// Loads Homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Loads Posts page
router.get('/posts', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({});
    const posts = dbPostData.map(
      (post) => serialize(post));
    console.log('Posts: ', posts);
    res.render('allposts', {
      posts
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Renders the log-in screen if session is not logged in
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});

module.exports = router;