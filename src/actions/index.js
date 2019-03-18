import request from 'superagent'

//AUTHENTICATION


export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const navigate = target => {
  return {
    type: 'NAVIGATE',
    target // 'listing' or 'cart'
  }
}

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name
  }
}

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export const updateQuantities = cart => {
  return {
    type: 'UPDATE_QUANTITIES',
    cart
  }
}

export const confirmOrder = cart => {
  return {
    type: 'CONFIRM_ORDER',
    cart
  }
}

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}

function requestBeers () {
  return {
    type: 'REQUESTING_BEERS'
  }
}

function receiveBeers (beers) {
  return {
    type: 'RECEIVING_BEERS',
    beers
  }
}

export const getBeers = () => {
  return function (dispatch) {
    dispatch(requestBeers())
    request
      .get('http://localhost:8080/api/beers')
      .then(res => {
        const beers = res.body.beers
        dispatch(receiveBeers(beers))
      })
  }
}

function requestCart () {
  return {
    type: 'REQUESTING_CART'
  }
}

function receiveCart (cart) {
  return {
    type: 'RECEIVING_CART',
    cart
  }
}

export const getCart = () => {
  return function (dispatch) {
    dispatch(requestCart())
    request
      .get('http://localhost:8080/api/cart')
      .then(res => {
        const cart = res.body
        // console.log(res.body)
        dispatch(receiveCart(cart))
      })
  }
}

export function saveBeerToCart (id, name) {
  return function (dispatch) {
    // we're optimistic ;)
    dispatch(requestApi())
    dispatch(addToCart(id, name))
    request.post('http://localhost:8080/api/cart')
      .send({id, name})
      .then(() => {
        dispatch(receiveApi())
      })
      .catch(err => {
        dispatch(receiveApi())
        dispatch(removeFromCart(id))
        console.error(err)
      })
  }
}

function requestApi () {
  return {
    type: 'REQUESTING_API'
  }
}

function receiveApi () {
  return {
    type: 'RECEIVING_API'
  }
}
