import React from 'react';
import Nav from './components/Nav';
import './css/App.css';
import ItemPage from './components/ItemPage';
import { items } from './components/Dummy-Data.js';
import CartPage from './components/CartPage.js';

class App extends React.Component {
  state = {
    activeTab: 0,
    cart: []
  };

  //Choose wether to render ItemPage or CartPage
  changeTab = index => {
    this.setState({
      activeTab: index
    })
  }

  handleAddToCart = item => {
    this.setState({
      //Copying the cart state using spread operator, plus one new item
      cart: [...this.state.cart, item.id]
    })
  }

  renderContent() {
    //Switch between item and cart tabs
    switch(this.state.activeTab) {
      default:
      case 0: 
      return (
        <ItemPage 
        items={ items } 
        addToCart= { this.handleAddToCart }
        />
      )
      case 1: 
        return this.renderCart() 
    }
  }

  renderCart() {
    // Build an object, where the keys of the object are itemId
    // and the values are the number of each item in array
    let itemCount = this.state.cart.reduce((itemCount, itemId) => {
      itemCount[itemId] = itemCount[itemId] || 0;
      itemCount[itemId]++;
      return itemCount
    }, {}); /* The first time this is called, reduce requires a previous iteration,
               which in our case, is just an empty object.
            */
  
  //create an array of items
  //Object.keys allows us to iterate over the keys of an object
  let cartItems = Object.keys(itemCount).map(itemId => {
    //find item by ID
    let item = items.find(item => 
      item.id === parseInt(itemId, 10)
      );

      //create a new item, and add a count property to it
      return {
        ...item, 
        count: itemCount[itemId]
      }
  });

  return (
    <CartPage items={cartItems} />
  )
  }

  render() {
    return (
      <div className="App">
      <div>{this.state.cart.length} items</div>
        <Nav activeTab = { this.state.activeTab } changeTab = { this.changeTab }/>
        <main className="App__content">
          {this.renderContent()}
        </main>
    </div>
    );
  }
}

export default App;