const router = require('express').Router();
const User = require('../models/User');

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

// Create User
router.post('/newuser', async (req, res) => {
  try {
    const userData = await User.Create(req.body);
    console.log('Userdata: ', userData);
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;