import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

class Header extends React.Component {
    guestUser() {
        return (
            <React.Fragment>
                <Menu.Item>
                    <Link to="/signup"><Button primary>Sign Up</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signin"><Button primary>Sign in</Button></Link>
                </Menu.Item>
            </React.Fragment>
        )
    }

    registeredUser() {
        return (
            <React.Fragment>
                <Menu.Item>
                    <Link to="/signout"><Button primary>Sign out</Button></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/feature"><Button primary>Feature</Button></Link>
                </Menu.Item>
            </React.Fragment>
        )
    }

    render() {
        return (
                <Menu size='huge'>
                <Link to="/">
                    <Menu.Item name='home'/>
                </Link>
                    <Menu.Menu position='right'>
                    {this.props.authenticated ? this.guestUser() : this.registeredUser()}
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