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
                    <Link to="/feature"><Button positive color="green">Feature</Button></Link>
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




// import React from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

// class Header extends React.Component {
//     renderLinks() {
//         if(this.props.authenticated) {
//             return (
//                 <div>
//                     <Link to="/signout">Sign out</Link>
//                     <Link to="/feature">Feature</Link>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <Link to="/signup">Sign up</Link>
//                     <Link to="/signin">Sign in</Link>
//                 </div>
//             )
            
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Link to="/">Redux Auth</Link>
//                 {this.renderLinks()}
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         authenticated: state.auth.authenticated
//     }
// }

// export default connect(mapStateToProps)(Header)