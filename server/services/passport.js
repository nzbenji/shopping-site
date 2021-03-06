const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

//Find user in database and check if login details match with email and hashed password
const localLogin = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({email}, function(err, user) {
        if(err) return done(err)
        if(!user) return done(null, false)

        user.comparePassword(password, function (err, matched) {
            if(err) return done(err)
            if(!matched) return done(null, false, {message: 'Incorrect email or password.'})

            return done(null, user, {message: 'Logged In Successfully'})
        })
    })
})

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

//Check if the users ID in the payload exists in our DB
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if(err) return done(err, false) //Didnt find user

        //If user found, call done with user, otherwise return false
        //null represents no error
        user ? done(null, user) : done(null, false) //Or Create a new account
    })
})

passport.use(jwtLogin)
passport.use(localLogin)