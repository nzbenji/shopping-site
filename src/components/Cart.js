import React from 'react'
import CartPage from './CartPage'
import {connect} from 'react-redux'

class Cart extends React.Component {
  render () {
    return (
      <div>
        <CartPage />
      </div>
    )
  }
}

function mapStateToProps (state) {

  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(Cart)
