const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userService = require('../service/UserService');
const AuthConfig = require('../config/AuthConfig.json');

let options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : AuthConfig.SecretKey
}

passport.use(new JWTStrategy(options, async function(jwt_payload, done) {
    console.log('hire');
    try {
        const user = await userService.GetDetailById(jwt_payload.userId);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    }
    catch (error) {
        return done(error, false);
    }
}));

module.exports = passport;