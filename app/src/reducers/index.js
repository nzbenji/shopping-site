import {combineReducers} from 'redux'
import beers from './beers'
import isLoading from './isLoading'

export default combineReducers({
  beers,
  isLoading
})