import React from 'react';

const Nav = ({ activeTab, changeTab }) => (
    <nav className="App__nav">
        <ul>
            <li className={`App__nav-item ${activeTab === 0 && 'selected' }`}>
                <a onClick={ () => changeTab(0) } >Items</a> 
            </li>
            <li className={`App__nav-item ${activeTab === 1 && 'selected'}`}>
            {/*  Wrapping the onClick handler with an arrow function delays the execution execution
                until the user has clicked the element. When written without the arrow function changeTab 
                will be rendered when Nav renders.
            */}
                <a onClick={ () => changeTab(1) } >Cart</a>
            </li>
        </ul>
    </nav>
);

export default Nav