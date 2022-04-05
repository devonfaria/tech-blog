const { User } = require('../models');

const userData = [
  {
    username: "devonfaria",
    password: "password123"
  },
  {
    username: "davidfaria",
    password: "123password"
  },
  {
    username: "deanafaria",
    password: "password456"
  },
  {
    username: "daniellefaria",
    password: "456password"
  },
  {
    username: "derekfaria",
    password: "123password123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;