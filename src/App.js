import React from 'react'
import Listing from './components/listing/Listing'
import Cart from './components/Cart'
import {connect} from 'react-redux'
import OrderConfirm from './OrderConfirm'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  render () {
    return (
      <div className='app'>
        {this.props.target === 'listing' && <Listing />}
        {this.props.target === 'cart' && <Cart />}
        {this.props.target === 'order' && <OrderConfirm />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {target: state.nav}
}

export default connect(mapStateToProps)(App)
