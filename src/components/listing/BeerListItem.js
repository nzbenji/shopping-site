import React from 'react'
import {connect} from 'react-redux'
import { navigate, saveBeerToCart } from '../../actions/index'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  height: 528px;
  width: 400px;
  margin: 30px;
  padding: 12px;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 0 0.2rem #eee;
  }
`;

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    background: #e67e22;
    color: #eeeeee;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    padding: 12px 40px;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    transition: .7s;
    letter-spacing: 1px;
&:hover {
    background: #2c3339;
    color: #ffffff;
    transition: .7s;
    cursor: pointer;
}
`;

class BeerListItem extends React.Component {

    handleAdd = () => {
        this.props.dispatch(saveBeerToCart(this.props.beer.id, this.props.beer.name, this.props.beer.price))
        this.props.dispatch(navigate('cart'))
    }

    render() {
        const { name, brewery, country, style, abv, image } = this.props.beer
        return (
            <Container>
                <img src={image} height="350"></img>
                <p>{name}</p>
                <p>A {` ${style} `} from {` ${brewery}`}</p>
                <p>
                    <span>{country}</span>
                    <div>{`${abv} `} abv</div>
                </p>
                <StyledLink to="/cart" onClick={this.handleAdd}>
                    Add to cart
                </StyledLink>
            </Container>
        )
    }
}

export default connect()(BeerListItem)