import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../actions'

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
                <td><input className="update-input" value={this.state.quantity} onChange={this.handleChange}/></td>
                <td><button onClick={this.handleDelete}><span className="fa fa-trash fa-2x"></span></button></td>
            </tr>
        )
    }
}

export default connect()(CartListItem)