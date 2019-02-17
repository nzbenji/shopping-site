const beers = require('../data/beers')
const cart = []

function getBeers () {
  return beers
}

function getCart () {
  return cart
}

function addToCart (beer) {
  const targetIndex = cart.findIndex(elem => elem.id === beer.id)
  if (targetIndex !== -1) {
    cart[targetIndex].quantity++
  } else {
    cart.push({...beer, quantity: 1})
  }
}

module.exports = {
  getBeers,
  getCart,
  addToCart
}
