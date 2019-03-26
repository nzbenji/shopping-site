import React from 'react'
import {connect} from 'react-redux'
import CartListItem from './CartListItem'

function CartListTable (props) {
  return (
    <div>
          <span>Beer</span>
          <span>Quantity</span>
          <span>Remove</span>
        {props.beers.map(beer => {
          return <CartListItem beer={beer} key={beer.name} handleQuantityChange={props.handleQuantityChange}/>
        })}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    beers: state.cart
  }
}

export default connect(mapStateToProps)(CartListTable)
