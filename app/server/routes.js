const express = require('express')

const db = require('./db')

const router = express.Router()

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

module.exports = router
