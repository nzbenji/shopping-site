const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true }, 
    password: String
})

//Before saving model, run this function
userSchema.pre('save', function(next) {
    const user = this
    bcrypt.genSalt(10, function(err, salt) {
        if(err) return next(err) 

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if(err) return next(err)

            //Overwrite password with encrypted password
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(submittedPassword, callback) {
    bcrypt.compare(submittedPassword, this.password, (err, matched) => {
        if(err) return callback(err)

        callback(null, matched)
    })
}
const model = mongoose.model('user', userSchema)

module.exports = model