import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.js';
import '../css/ItemPage.css';

function ItemPage( { items, addToCart }) {
    return (
        <ul className="item__page-items">
            {items.map(item => 
                <li key={item.id} className="item__page-item">
                { /* Rendering the Item component inside of items name.  */}
                <Item item={item} addToCart= { () => addToCart(item) }/>
                </li>
                )}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired
};

export default ItemPage