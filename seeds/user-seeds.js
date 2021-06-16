const { User } = require('../models');

const userData = [
    {
        username: "abalcom23",
        email: "abalcom23@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "jclark",
        email: "jclark@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "efagioli",
        email: "efagioli@gmail.com",
        password: "p@ssword3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;