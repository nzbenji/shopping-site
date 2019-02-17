const initialOrdersState = []

const orders = (state = initialOrdersState, action) => {
  switch (action.type) {
    case 'CONFIRM_ORDER':
      return [...state, action.cart]
    default:
      return state
  }
}

export default orders