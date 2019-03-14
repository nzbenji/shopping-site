import React from 'react'
import { connect } from 'react-redux'
import {navigate, clearCart} from './actions'

function OrderConfirm(props) {

    const backToListing = () => {
        props.dispatch(navigate('listing'))
        props.dispatch(clearCart())
    }

    return (
        <div>
            <h1>Thank you for your order!</h1>
            <button onClick={backToListing}>Back to Store</button>
        </div>
    )
}

export default connect()(OrderConfirm)