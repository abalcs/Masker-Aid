const User = require('./User');

// User.hasMany(Weapon, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Weapon.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// User.hasMany(Armor, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Armor.belongsTo(User, {
//     foreignKey: 'user_id'
// })

module.exports = { User }