const sequelize = require('../config/connection');
const seedUsers = require('./userSeeds');
const seedPosts = require('./postSeeds');

const seeding = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  process.exit(0);
};

seeding();