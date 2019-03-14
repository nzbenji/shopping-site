const initialState = true

const isLoading = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTING_BEERS':
      return true
    case 'RECIEVING_BEERS':
      return false
    default:
    return state
  }
}

export default isLoading