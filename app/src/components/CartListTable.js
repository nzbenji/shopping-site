import React from 'react'
import {connect} from 'react-redux'
import CartListItem from './CartListItem'

function CartListTable (props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Beer</th>
          <th>Quantity</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {props.beers.map(beer => {
          return <CartListItem beer={beer} key={beer.name} handleQuantityChange={props.handleQuantityChange}/>
        })}
      </tbody>
    </table>
  )
}

function mapStateToProps (state) {
  return {
    beers: state.cart
  }
}

export default connect(mapStateToProps)(CartListTable)
