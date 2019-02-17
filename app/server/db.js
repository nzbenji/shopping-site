const beers = require('../data/beers')
const cart = []

function getBeers () {
  return beers
}

function getCart () {
  return cart
}


module.exports = {
  getBeers,
  getCart
}
