const { User } = require('../models');

const userData = [
  {
    username: "devonfaria",
    email: "devonfaria@gmail.com",
    password: "password123"
  },
  {
    username: "davidfaria",
    email: "fun@gmail.com",
    password: "123password"
  },
  {
    username: "deanafaria",
    email: "cool@gmail.com",
    password: "password456"
  },
  {
    username: "daniellefaria",
    email: "hey@gmail.com",
    password: "456password"
  },
  {
    username: "derekfaria",
    email: "hi@gmail.com",
    password: "123password123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;