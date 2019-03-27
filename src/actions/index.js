import request from 'superagent'
import axios from 'axios'

//AUTHENTICATION
export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8080/api/signup', formProps)

    dispatch({type: 'AUTH_USER', payload: response.data.token})
    //Store our JWT in localstorage 
    localStorage.setItem('token', response.data.token)
    callback()
  } catch(e) {
    dispatch({type: 'AUTH_ERROR', payload: 'Email in use'})
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8080/api/signin', formProps)

    dispatch({type: 'AUTH_USER', payload: response.data.token})
    localStorage.setItem('token', response.data.token)
    callback()
  } catch(e) {
    dispatch({type: 'AUTH_ERROR', payload: 'Incorrect login credentials'})
  }
}

export const signout = () => {
  localStorage.removeItem('token')

  return {
    type: 'AUTH_USER',
    payload: '' //clear authenticated piece of state
  }
}

//CART

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

export const addToCart = (id, name, price) => {
  return {
    type: 'ADD_TO_CART',
    id,
    name,
    price
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
        dispatch(receiveCart(cart))
      })
  }
}

export function saveBeerToCart (id, name, price) {
  return function (dispatch) {
    dispatch(requestApi())
    dispatch(addToCart(id, name, price))
    request.post('http://localhost:8080/api/cart')
      .send({id, name, price})
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
