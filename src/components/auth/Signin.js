import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {SigninBtn, Footer, Wrapper} from '../styles/AuthStyling'
import '../styles/inputStyling.css'

class Signin extends React.Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
            this.props.history.push('/shop')
        })
    }

    render() {
        const {handleSubmit} = this.props //provided by redux-form
        return (
            <div>
                <Wrapper onSubmit={handleSubmit(this.onSubmit)} type="submit">
                        <Field 
                            className="input__styling"
                            name="email"
                            type="text"
                            component="input"
                            autoComplete="none"
                            placeholder="email"
                        />
                        <Field 
                            className="input__styling"
                            name="password"
                            type="password"
                            component="input"
                            autoComplete="none"
                            placeholder="password"
                        />
                    <div>
                        {this.props.errorMessage}
                    </div>
                    <SigninBtn>Sign In</SigninBtn>
                </Wrapper>
                <Footer>
                    Forgot Password?
                </Footer>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signin'})
)(Signin)