const { Post } = require('../models');

const postData = [
  {
    content: "Let's goooooooo!",
    title: "First Post",
    user_id: 3
  },
  {
    content: "Let's goooooooo!",
    title: "Second Post",
    user_id: 2
  },
  {
    content: "Let's goooooooo!",
    title: "Third Post",
    user_id: 1
  },
  {
    content: "Let's goooooooo!",
    title: "Fourth Post",
    user_id: 4
  },
  {
    content: "Let's goooooooo!",
    title: "Fifth Post",
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;