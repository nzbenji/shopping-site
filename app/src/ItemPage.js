import React from 'react';
import PropTypes from 'prop-types';
import './ItemPage.css';

function ItemPage( { items }) {
    return (
        <ul className="item__page-items">
            {items.map(item => 
                <li key={item.id} className="item__page-item">
                {item.name}
                </li>
                )}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemPage