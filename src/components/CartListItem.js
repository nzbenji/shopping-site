import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
    background: none;
    color: inherit;
    border: none;
    outline: inherit;
    cursor: pointer;
`;

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



class CartListItem extends React.Component {

    state = {
        quantity: this.props.beer.quantity
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
            quantity: this.state.quantity + 1
        })
    }
    handleDecrease = () => {
        if(this.state.quantity > 0)
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    render() {
        console.log(this.state.quantity)
        return (
            <div>
                <span>{this.props.beer.name}</span>
                <QtyButtons onClick={this.handleDecrease}><FontAwesomeIcon icon={faMinus} /></QtyButtons>
                <Quantity onChange={this.handleChange} style={{fontSize: '20px'}}>{this.state.quantity}</Quantity>
                <QtyButtons onClick={this.handleIncrease}><FontAwesomeIcon icon={faPlus} /></QtyButtons>
                <td><Button onClick={this.handleDelete}><FontAwesomeIcon icon={faTimes} size="2x" /></Button></td>
            </div>
        )
    }
}

export default connect()(CartListItem)