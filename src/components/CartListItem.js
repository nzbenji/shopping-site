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
    background: none;
    color: inherit;
    border: none;
    outline: inherit;
    cursor: pointer;
    margin: 15px;
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

    render() {
        return (
            <tr>
                <td>{this.props.beer.name}</td>
                <td></td>
                <QtyButtons><FontAwesomeIcon icon={faMinus} size="2x" /></QtyButtons>
                <span onChange={this.handleChange} style={{fontSize: '20px'}}>{this.state.quantity}</span>
                <QtyButtons><FontAwesomeIcon icon={faPlus} size="2x" /></QtyButtons>
                <td><Button onClick={this.handleDelete}><FontAwesomeIcon icon={faTimes} size="2x" /></Button></td>
            </tr>
        )
    }
}

export default connect()(CartListItem)