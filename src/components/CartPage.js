import React from 'react'
import {connect} from 'react-redux'
import CartListTable from './CartListTable'
import {navigate, updateQuantities, confirmOrder, getCart} from '../actions'
import styled from 'styled-components';

const Cart = styled.div`
  width: 750px;
  height: 600px;
  margin: 80px auto;
  background: #FFFFFF;
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`

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
        <Cart>
          <CartListTable handleQuantityChange={this.handleQuantityChange}/>
                  
        </Cart>
        <div>
            <a href="#" onClick={this.continueShopping}>Continue shopping</a> {'   '}
            <button onClick={this.handleUpdateSubmit}>Update</button> {'   '}
            <button className="button-primary" onClick={this.confirmOrder}>Checkout</button>
        </div>
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
