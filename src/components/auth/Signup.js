import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {SigninBtn as RegisterBtn, Wrapper} from '../styles/AuthStyling'
import '../styles/inputStyling.css'

class Signup extends React.Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/feature')
        })
    }

    render() {
        const {handleSubmit} = this.props //provided by redux-form
        return (
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
                <RegisterBtn>Sign Up</RegisterBtn>
            </Wrapper>
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
    reduxForm({form: 'signup'})
)(Signup)