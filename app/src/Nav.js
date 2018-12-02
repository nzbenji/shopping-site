import React from 'react';

const Nav = ({ activeTab, tabChange }) => (
    <nav className="App__nav">
        <ul>
            <li className={`App__nav-item ${activeTab === 0 && 'selected' }`}>
                <a onClick={ () => tabChange(0) } >Items</a> 
            </li>
            <li className={`App__nav-item ${activeTab === 1 && 'selected'}`}>
            {/*  Wrapping the onClick handler with an arrow function delays the execution execution
                until the user has clicked the element. When written without the arrow function tabChange 
                will be rendered when Nav renders.
            */}
                <a onClick={ () => tabChange(1) } >Cart</a>
            </li>
        </ul>
    </nav>
);

export default Nav