import React from 'react';
import PropTypes from 'prop-types';
import '../css/Item.css';

const Item = ( { item, addToCart }) => (
    <div className="item">
        <div className="item__left">
        <div className="item__image"/>
        <div className="item__title">
            {Item.name}
        </div>
        <div className="item__description">
            {item.description}
        </div>
        </div>
        <div className="item__right">
        <div className="item__price">
            {item.price}
        </div>
        <button className="item__addToCart" onClick={addToCart}>
        Add to Cart
        </button>
        </div>
    </div>
);

Item.PropTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
};

export default Item;