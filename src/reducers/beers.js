const initialState = []

const beers = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVING_BEERS':
      return action.beers
    default:
      return state
  }
}

export default beers