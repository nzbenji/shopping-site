import {combineReducers} from 'redux'
import beers from './beers'
import isLoading from './isLoading'
import nav from './nav'
import cart from './cart'
import orders from './orders'

export default combineReducers({
  beers,
  isLoading,
  nav,
  cart,
  orders
})