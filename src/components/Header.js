import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import NavStyling from './styles/NavStyling'


class Header extends React.Component {
    guestUser() {
        return (
            <React.Fragment>
                <Link to="/signup"><a>Sign Up</a></Link>
                <Link to="/signin"><a>Sign In</a></Link>
                <Link to="/shop"><a>Shop</a></Link>
            </React.Fragment>
        )
    }

    registeredUser() {
        return (
            <React.Fragment>
                <Link to="/signout"><a>Sign Out</a></Link>
                <Link to="/shop"><a>Shop</a></Link>
            </React.Fragment>      
        )
    }

    render() {
        return (
                <div>
                    <NavStyling>
                    {this.props.authenticated ? this.registeredUser() : this.guestUser() }
                    </NavStyling>
                </div>              
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header)