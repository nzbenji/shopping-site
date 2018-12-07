import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import '../css/CartPage.css';

function CartPage( { items, removeItem, addItem }) {
    return (
        <ul className="cart__items">
            {items.map(item => 
                <li key={item.id} className="cart_item">
                    <Item item={ item }>
                        <div className="item__controls">
                            <button className="remove__item"
                                onClick={ () => removeItem(item) }>&ndash;</button>
                            <span className="item__count">{ item.count }</span>
                            <button className="add__item"
                            onClick= { () => addItem(item) }>+</button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired
};

export default CartPage