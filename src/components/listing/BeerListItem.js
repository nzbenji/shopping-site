import React from 'react'
import {connect} from 'react-redux'
import { navigate, saveBeerToCart } from '../../actions/index'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 520px;
  width: 300px;
  padding: 12px;
  transition: box-shadow 0.15s ease-in-out;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 0 0 0.2rem #eee;
  }
`;

const StyledLink = styled(Link)`
    float: right;
    display: block;
    text-decoration: none;
    background: #2f5289;
    color: #eeeeee;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    padding: 8px 40px;
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
        this.props.dispatch(saveBeerToCart(this.props.beer.id, this.props.beer.name))
        this.props.dispatch(navigate('cart'))
    }

    render() {
        console.log(this.props.beer)
        const { name, brewery, country, style, abv, image } = this.props.beer
        return (
            <Container>
                <img src={image} height="350"></img>
                <p className="name">{name}</p>
                <p className="description">A {` ${style} `} from {` ${brewery}`}</p>
                <p>
                    <span className="country">{country}</span>
                    <span className="abv">{`${abv} `} abv</span>
                </p>
                <StyledLink to="#" onClick={this.handleAdd}>
                    Add to cart
                </StyledLink>
            </Container>
        )
    }
}

export default connect()(BeerListItem)