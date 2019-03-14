const initialNavState = 'listing'

const nav = (state = initialNavState, action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target
    default:
      return state
  }
}

export default nav
