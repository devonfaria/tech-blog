const Post = require('../models/Post');
const Comment = require('../models/Comment');
const router = require('express').Router();
const serialize = require('../utils/serialize');

// Loads Homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({});
    const posts = dbPostData.map(
      (post) => serialize(post));
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Loads Dashboard page
router.get('/dashboard', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: 1
      }
    });
    const posts = dbPostData.map(
      (post) => serialize(post));
    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
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
    res.render('allposts', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Loads single Post page
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id
      }
    });

    const post = serialize(postData);
    const comments = serialize(commentData);
    console.log('Post: ', post);
    console.log('Comments: ', comments);
    res.render('single-post', {
      post,
      comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Loads Add Post page
router.get('/addpost', (req, res) => {
  if (req.session.loggedIn) {
    res.render('addpost',
      {
        loggedIn: req.session.loggedIn,
      });
  }
  res.render('login',);
});

// Renders the log-in screen if session is not logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect('/');
  }
  res.render('login');
});

// Renders sign-up page, and logs user out if signing up as new user
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    res.render('signup');
    return;
  }
  res.render('signup');
});

module.exports = router;