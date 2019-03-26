import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const QtyButtons = styled.button`
    width: 30px;
    height: 30px;
    background-color: #E1E8EE;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    margin: 10px;
`

const Quantity = styled.span`
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
`

const Buttons = styled.button`
    display: inline-block;
    Cursor: pointer;
    margin-right: 10px;
    background: none;
    border: none;
    outline: inherit;
`

const Name = styled.span`
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 18px;
    font-weight: 400;
`

class CartListItem extends React.Component {

    state = {
        quantity: this.props.beer.quantity,
        price: this.props.beer.price,
        BtnColorChange: "#e74c3c"
    }

    handleDelete = () => {
        this.props.dispatch(removeFromCart(this.props.beer.id))
    }

    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
        this.props.handleQuantityChange(this.props.beer.id, event.target.value)
    }

    handleIncrease = () => {
        this.setState({
            quantity: this.state.quantity + 1, 
            price: this.state.price * 2
        })
    }
    handleDecrease = () => {
        const {quantity} = this.state
        if(quantity > 0)
        this.setState({
            quantity: quantity - 1,
            price: this.state.price / 2
        })
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <Buttons  
                    onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faTimes} size="2x" />
                </Buttons>

                <Buttons 
                    style={{color: "#2ecc71"}}
                    onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faHeart} size="2x" />
                </Buttons>

                <Name>{this.props.beer.name}</Name>
                <QtyButtons 
                    onClick={this.handleDecrease}>
                    <FontAwesomeIcon icon={faMinus} />
                </QtyButtons>

                <Quantity 
                    onChange={this.handleChange} style={{fontSize: '20px'}}>
                    {this.state.quantity}
                </Quantity>

                <QtyButtons 
                    onClick={this.handleIncrease}>
                    <FontAwesomeIcon icon={faPlus} />
                </QtyButtons>
                <div>
                   {this.state.quantity !== 0 ? `$ ${this.state.price}` : '$0.00' }
                </div>
            </div>
        )
    }
}

export default connect()(CartListItem)