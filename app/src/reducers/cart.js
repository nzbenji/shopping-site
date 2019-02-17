const initialCartState = []

const cart = (state = initialCartState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addBeerToCart(state, action)
    case 'REMOVE_FROM_CART':
      return state.filter(beer => beer.id !== action.id)
    case 'UPDATE_QUANTITIES':
      return updateCart(state, action.cart)
    case 'CLEAR_CART':
      return []
    case 'RECEIVING_CART':
      return action.cart
    default:
      return state
  }
}

function addBeerToCart (state, action) {
  const targetIndex = state.findIndex(beer => beer.id === action.id)
  if (targetIndex !== -1) {
    state[targetIndex].quantity++
    return [ ...state ]
  }
  return [...state, {
    id: action.id,
    name: action.name,
    quantity: 1
  }]
}

function updateCart (state, newCart) {
  state.forEach(beer => { beer.quantity = newCart.find(elem => elem.id === beer.id).quantity })
  return [...state]
}

export default cart
