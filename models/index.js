// Importing models
const User = require('./User');
const Post = require('./Post');

// Associations
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Export models
module.exports = {
  User,
  Post,
};