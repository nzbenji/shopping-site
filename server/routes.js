const express = require('express')
const db = require('./db')
const router = express.Router()
const User = require('./models/user')

router.use(express.json())

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

router.post('/signup', (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  if(!email || !password){
    return res.status(422).send({error: 'You must provide email or password'})
  }
  //prevent duplicate users
  User.findOne({ email }, (err, existingUser) => {
    if(err) { return next(err) }

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
      if (err) { return next(err) }
      res.json(user)
    })
  })
})

module.exports = router
