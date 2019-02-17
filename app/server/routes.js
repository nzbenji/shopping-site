const express = require('express')

const db = require('./db')

const router = express.Router()

router.use(express.json())

router.get('/beers', (req, res) => {
  setTimeout(() => {
    res.json(db.getBeers())
  }, 2000)
})


module.exports = router
