const passport = require('../loader/Paassport');

module.exports = passport.authenticate('jwt', {session: false});