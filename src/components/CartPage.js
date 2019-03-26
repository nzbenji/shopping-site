import React from 'react'
import {connect} from 'react-redux'
import CartListTable from './CartListTable'
import {navigate, updateQuantities, confirmOrder, getCart} from '../actions'

class CartListBody extends React.Component {

  constructor (props) {
      super(props)
      this.state = {
          cart: this.props.cart
      }
  }

  continueShopping = () => {
      this.props.dispatch(navigate('listing'))
  }

  handleQuantityChange = (id, value) => {
      const cart = this.state.cart
      const targetBeer = {...cart.find(beer => beer.id === id)}
      targetBeer.quantity = value
      this.setState({
        cart: [...cart.filter(beer => beer.id !== id), targetBeer]
      })
  }

  handleUpdateSubmit = () => {
      this.props.dispatch(updateQuantities(this.state.cart))
  }

  confirmOrder = () => {
      this.props.dispatch(confirmOrder(this.state.cart))
      this.props.dispatch(navigate('order'))
  }

  render () {
    return (
      <div>
        <CartListTable handleQuantityChange={this.handleQuantityChange}/>
                <p className="actions">
                    <a href="#" onClick={this.continueShopping}>Continue shopping</a> {'   '}
                    <button onClick={this.handleUpdateSubmit}>Update</button> {'   '}
                    <button className="button-primary" onClick={this.confirmOrder}>Checkout</button>
                </p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(CartListBody)
