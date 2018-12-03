import React from 'react';
import Nav from './Nav';
import './App.css';
import ItemPage from './ItemPage';
import { items } from './Dummy-Data.js';

class App extends React.Component {
  state = {
    activeTab: 0
  };

  //Choose wether to render ItemPage or CartPage
  changeTab = index => {
    this.setState({
      activeTab: index
    })
  }

  renderContent() {
    //Switch between item and cart tabs
    switch(this.state.activeTab) {
      default:
      case 0: return (
        <ItemPage items={ items } />
      )
      case 1: return (
        <span>Cart</span>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Nav activeTab = { this.state.activeTab } changeTab = { this.changeTab }/>
        <main className="App__content">
          {this.renderContent()}
        </main>
    </div>
    );
  }
}

export default App;