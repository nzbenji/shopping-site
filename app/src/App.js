import React from 'react';
import Nav from './Nav';
import './App.css';

class App extends React.Component {
  state = {
    activeTab: 0
  };

  //Choose wether to render ItemPage or CartPage
  tabChange = index => {
    this.setState({
      activeTab: index
    })
  }

  renderContent() {
    //Switch between item and cart tabs
    switch(this.state.activeTab) {
      default:
      case 0: return (
        <span>Items</span>
      )
      case 1: return (
        <span>Cart</span>
      )
    }
  }

  render() {
    //destructor state object
   // let { activeTab } = this.state
    return (
      <div className="App">
        <Nav activeTab= { this.state.activeTab } tabChange={this.tabChange}/>
        <main className="App__content">
          {this.renderContent()}
        </main>
    </div>
    );
  }
}

export default App;