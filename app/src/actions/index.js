import request from 'superagent'

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

function requestBeers () {
  return {
    type: 'REQUESTING_BEERS'
  }
}

function recieveBeers (beers) {
  return {
    type: 'RECIEVING_BEERS',
    beers
  }
}

export const getBeers = () => {
  return function (dispatch) {
    dispatch(requestBeers())
      request 
        .get('http://localhost:3000/api/beers')
        .then(res => {
          dispatch(recieveBeers(res.body.beers))
        })
  }
}