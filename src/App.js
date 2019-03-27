import React from 'react'
import Listing from './components/listing/Listing'
import Cart from './components/Cart'
import {connect} from 'react-redux'
import OrderConfirm from './OrderConfirm'
import Header from './components/Header'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}

        {this.props.target === 'listing' && <Listing />}
        {this.props.target === 'cart' && <Cart />}
        {this.props.target === 'order'}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {target: state.nav}
}

export default connect(mapStateToProps)(App)
