import React from 'react'
import CartPage from './CartListBody'
import {connect} from 'react-redux'

class Cart extends React.Component {
  render () {
    return (
      <div>
      <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
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
