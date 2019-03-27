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
    border-radius: 6px;
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

export {SigninBtn, Footer, Wrapper}