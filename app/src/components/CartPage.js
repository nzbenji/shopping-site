import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import '../css/CartPage.css';

function CartPage( { items }) {
    return (
        <ul className="cart__items">
            {items.map(item => 
                <li key={item.id} className="cart_item">
                    <Item item={ item }/>
                </li>
            )}
        </ul>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default CartPage