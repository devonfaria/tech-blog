const { Comment } = require('../models');

const commentData = [
  {
    comment: "Naughty or nice? The world only knows!",
    user_id: 3,
    post_id: 1
  },
  {
    comment: "Nice hat!",
    user_id: 2,
    post_id: 2
  },
  {
    comment: "The monkey is crazy!",
    user_id: 5,
    post_id: 2
  },
  {
    comment: "Wow I was not ready!",
    user_id: 5,
    post_id: 5
  },
  {
    comment: "Regis Philbin RIP!",
    user_id: 4,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;