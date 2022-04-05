const { Post } = require('../models');

const postData = [
  {
    user: "devonfaria",
    content: "Let's goooooooo!",
    title: "First Post",
    date: "4/1/2022",
    user_id: 3
  },
  {
    user: "davidfaria",
    content: "Let's goooooooo!",
    title: "Second Post",
    date: "4/2/2022",
    user_id: 2
  },
  {
    user: "deanafaria",
    content: "Let's goooooooo!",
    title: "Third Post",
    date: "4/3/2022",
    user_id: 1
  },
  {
    user: "daniellefaria",
    content: "Let's goooooooo!",
    title: "Fourth Post",
    date: "4/4/2022",
    user_id: 4
  },
  {
    user: "derekfaria",
    content: "Let's goooooooo!",
    title: "Fifth Post",
    date: "4/5/2022",
    user_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;