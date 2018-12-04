import React from 'react';
import Nav from './components/Nav';
import './css/App.css';
import ItemPage from './components/ItemPage';
import { items } from './components/Dummy-Data.js';

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
      case 0: return (
        <ItemPage 
        items={ items } 
        addToCart= { this.handleAddToCart }
        />
      )
      case 1: return (
        <span>Cart</span>
      )
    }
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