import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import styled from 'styled-components';

const Wrapper = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    width: 60rem;
    min-height: 25rem;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    form {
        border-radius: 10px 10px 10px 10px;
        background: #fff;
        padding: 30px;
        width: 90%;
        max-width: 450px;
        position: relative;
        padding: 0px;
        box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
        text-align: center;
    }
`

const Footer = styled.div`
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    border-radius: 0 0 10px 10px;
    width: 60rem;
    width: 50%;
    margin: 0 auto;
`

const SigninBtn = styled.button`
    background-color: #2ecc71;
    border: none;
    color: white;
    width: 40rem;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600px;
    letter-spacing: 4px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #27ae60;
        transform: scale(0.95);
    }
    &:placeholder {
        color: #cccccc;
    }
`

const InputField = styled.input`
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    letter-spacing: 4px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    transition: all 0.5s ease-in-out;
    border-radius: 5px 5px 5px 5px;
    &:focus {
        background-color: #fff;
        border-bottom: 2px solid #5fbae9;
    }
`

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
                        <InputField 
                            name="email"
                            type="text"
                            component="input"
                            autoComplete="none"
                            placeholder="email"
                        />
                        <InputField 
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