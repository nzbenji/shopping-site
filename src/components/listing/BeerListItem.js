import React from 'react'
import {connect} from 'react-redux'
import { navigate, saveBeerToCart } from '../../actions/index'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 600px;
  width: 300px;
  padding: 12px;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 0 0.2rem #eee;
  }
`;

class BeerListItem extends React.Component {

    handleAdd = () => {
        this.props.dispatch(saveBeerToCart(this.props.beer.id, this.props.beer.name))
        this.props.dispatch(navigate('cart'))
    }

    render() {
        const { name, brewery, country, style, abv } = this.props.beer
        return (
            <Container>
                <p className="name">{name}</p>
                <p className="description">A {` ${style} `} from {` ${brewery}`}</p>
                <p>
                    <span className="country">{country}</span>
                    <span className="abv">{`${abv} `} abv</span>
                    <a href="#" onClick={this.handleAdd} className="cart-link">Add to cart</a>
                </p>
            </Container>
        )
    }
}

export default connect()(BeerListItem)