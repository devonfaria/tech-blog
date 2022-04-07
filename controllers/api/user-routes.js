const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

// Validate User and log in
router.post('/login', async (req, res) => {
  try {
    // Uses email to find cooresponding user
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Validates password
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Sets loggedIn to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      ),
        res.json({ user: userData, message: 'You are now logged in!' });

    });


  } catch (err) {
    res.status(400).json(err);
  }
});

// // Validate a user
// router.get('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({
//       where: {
//         username: req.body.username,
//       }
//     });
//     if (!userData) {
//       res.json('Sorry, user not found');
//     } else {
//       bcrypt.compare(req.body.password, userData.password, function (err, res) {
//         if (err) {
//           console.log(err);
//         }
//         else if (res) {
//           console.log('Login successful!');
//         } else {
//           console.log('Passwords do not match');
//           return;
//         }
//       });
//     };
//     res.json('Compared passwords');
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// Get all Users
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

// Update User
router.put('/:id', (req, res) => {
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