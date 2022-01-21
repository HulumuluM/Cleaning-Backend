// Connect to database
const sequelize = require('../config/DatabaseConfig');

// Loading Models //
const User       = require('../models/User');
const UserInfo   = require('../models/UserInfo');
const UserRole   = require('../models/UserRole');
const Role       = require('../models/Role');
const Basket   = require('../models/Basket');
const Comments   = require('../models/Review');
const Orders       = require('../models/Orders');
const Rooms   = require('../models/Rooms');
const Services      = require('../models/CleaningJob');


// User Info
User.hasOne(UserInfo, { foreignKey: 'userId', as: 'UserInfo' });
UserInfo.belongsTo(User, { foreignKey: 'userId' });

// Users roles
User.belongsToMany(Role, { through: 'users_roles' });
Role.belongsToMany(User, { through: 'users_roles' });



// User.hasMany(Orders);
// Orders.belongsTo(User);
//
// User.hasMany(Comments);
// Comments.belongsTo(User);
//
// Comments.hasOne(Orders);
// Orders.belongsTo(Comments);
//
// // Rooms.hasOne(Orders);
// // Orders.belongsTo(Rooms);
//
// Basket.hasOne(Orders);
// Orders.belongsTo(Basket);
//
// Services.hasMany(Basket);
// Basket.belongsTo(Services);


sequelize.sync().then(result => {
     console.log(result);
}).catch(err => console.log(err));

sequelize.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));

module.exports = sequelize;