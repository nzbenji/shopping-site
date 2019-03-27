import React from 'react'
import {connect} from 'react-redux'
import CartListTable from './CartListTable'
import {navigate, updateQuantities, confirmOrder, getCart} from '../actions'
import styled from 'styled-components'
import { Link } from "react-router-dom"


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

const Buttons = styled.button`
  margin: 15px;
  text-align:center;
  border: none;
  background: #e67e22;
  width: 20rem;
  color: #ffffff !important;
  font-weight: 600;
  letter-spacing: 4px;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  &:hover {
    color: #e67e22 !important;
    font-weight: 700 !important;
    letter-spacing: 6px;
    background: none;
    -webkit-box-shadow: 20px 20px 50px -10px #2ecc71;
    -moz-box-shadow: 20px 20px 50px -10px #2ecc71;
    transition: all 0.3s ease 0s;
  }
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
      <div style={{textAlign:'center'}}>
        <Cart>
          <CartListTable 
          handleQuantityChange={this.handleQuantityChange}
          />
                  
        </Cart>
            <Link to="/" onClick={this.continueShopping}>Continue shopping</Link> {'   '}
            <Buttons onClick={this.handleUpdateSubmit}>Update</Buttons> {'   '}
            <Buttons onClick={this.confirmOrder}>Checkout</Buttons>
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
