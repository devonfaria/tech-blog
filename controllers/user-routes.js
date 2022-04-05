const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Validate a user
router.get('/login', async (req, res) => {
  try {
    const userData = await User.find({
      where: {
        username: req.body.username,
        password: req.body.password,
      }
    });
    // ADD BCRYPT HERE
    if (!userData) {
      res.json('Sorry, user not found');
    } else {
      res.json('User logged in');
    };
  } catch (err) {
    res.status(400).json(err);
  }
});


// get ALL Users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({});
    // ADD BCRYPT HERE
    if (!userData) {
      res.json('No users');
    } else {
      res.json(userData);
    };
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create User
router.post('/newuser', async (req, res) => {
  try {
    const userData = req.body;
    userData.password = await bcrypt.hash(req.body.password, 10);
    console.log('Password: ', userData.password);
    const newUser = await User.create(userData);
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  User.update({
    username: req.body.username,
    password: req.body.password
  },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((update) => {
    res.json(update);
  });
});

module.exports = router;