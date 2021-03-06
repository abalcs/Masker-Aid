const seedUsers = require('./user-seeds');
const seedPlaces = require('./places-seeds');

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedPlaces();
    console.log('\n----- PLACES SEEDED -----\n');

  process.exit(0);
};

seedAll();