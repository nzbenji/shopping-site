import React from 'react'
import {connect} from 'react-redux'
import { navigate, saveBeerToCart } from '../../actions/index'

class BeerListItem extends React.Component {

    handleAdd = () => {
        this.props.dispatch(saveBeerToCart(this.props.beer.id, this.props.beer.name))
        this.props.dispatch(navigate('cart'))
    }

    render() {
        const { name, brewery, country, style, abv } = this.props.beer
        return (
            <div className="beer">
                <p className="name">{name}</p>
                <p className="description">A {` ${style} `} from {` ${brewery}`}</p>
                <p>
                    <span className="country">{country}</span>
                    <span className="abv">{`${abv} `} abv</span>
                    <a href="#" onClick={this.handleAdd} className="cart-link">Add to cart</a>
                </p>
            </div>
        )
    }
}

export default connect()(BeerListItem)