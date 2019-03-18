const express = require('express')
const db = require('./db')
const router = express.Router()
const User = require('./models/user')
const jwt = require('jwt-simple')
const passport = require('passport')
const passportService = require('./services/passport')

const config = require('./config')
router.use(express.json())

const requireAuth = passport.authenticate('jwt', { session: false }) //Prevent cookie based auth
const requireSignin = passport.authenticate('local', {session: false})

function tokenForUser(user) {
  const timestamp = new Date().getTime
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

router.get('/', requireAuth, (req, res) => {
  res.send({working: 'Yes'})
})

router.get('/beers', (req, res) => { 
  setTimeout(() => {
    res.json(db.getBeers())
  }, 2000)
})

router.get('/cart', (req, res) => {
  setTimeout(() => {
    res.json(db.getCart())
  }, 2000)
})

router.post('/cart', (req, res) => {
  setTimeout(() => {
    db.addToCart(req.body)
    res.sendStatus(201)
  }, 2000)
})


router.post('/signin', requireSignin, (req, res, next) => {
  res.send({token:tokenForUser(req.user)})
})

router.post('/signup', (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  if(!email || !password){
    return res.status(422).send({error: 'You must provide email or password'})
  }
  //prevent duplicate users
  User.findOne({ email }, (err, existingUser) => {
    if(err) return next(err) 

    if(existingUser) {
      return res.status(422).send({ error: 'Email is in use'})
    }
    //Create and save user if doesn't exist in memory
    const user = new User({
      email,
      password
    })
  
    //save record to DB
    user.save(err => {
      if (err) return next(err)
      res.json(user)
    })
    res.json({ token: tokenForUser(user)})
  })
})

module.exports = router
