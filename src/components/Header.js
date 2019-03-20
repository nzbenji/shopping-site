import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Menu } from 'semantic-ui-react'

class Header extends React.Component {
    guestUser() {
        return (
            <React.Fragment>
                <Menu.Item>
                    <Link to="/signup"><Button positive color="green">Sign Up</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signin"><Button positive color="green">Sign in</Button></Link>
                </Menu.Item>
            </React.Fragment>
        )
    }

    registeredUser() {
        return (
            <React.Fragment>
                <Menu.Item>
                    <Link to="/signout"><Button negative>Sign out</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/shop"><Button positive color="green">Shop</Button></Link>
                </Menu.Item>
            </React.Fragment>
        )
    }

    render() {
        return (
                <Menu size='large'>
                <Link to="/">
                    <Menu.Item name='home'/>
                </Link>
                    <Menu.Menu position='right'>
                    {this.props.authenticated ? this.registeredUser() : this.guestUser() }
                    </Menu.Menu>
                </Menu>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header)