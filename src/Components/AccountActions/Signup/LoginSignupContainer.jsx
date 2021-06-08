import React, { Component } from 'react';
import {connect} from 'react-redux'

// Components Imports
import MDBLogin from './MDBLogin'
import MDBSignup from './MDBSignup'

class LoginSignupContainer extends Component {
    state = {
        login: true
    }

    toggleLogin = (e) => {
        this.setState({
            login: true
        }) }

    toggleSignup = (e) => {
         this.setState({
             login: false
         })

    }
    // If state login is true, render login form, other wise render signup form. 
    toggleForm  = () =>  this.state.login ? <MDBLogin /> : <MDBSignup />

    confirmLogin = () => {
        const toggleSigninLanguage = this.props.appState.language==='Chinese'? <button id ='login-toggle'class='login-signup-toggle' 
        onClick = {this.toggleLogin}> 登入 </button>
        : <button id='login-toggle' class='login-signup-toggle' 
        onClick = {this.toggleLogin}>Log In </button>
        const toggleSignupLanguage = this.props.appState.language==='Chinese'? <button class='login-signup-toggle' 
        onClick = {this.toggleLogin}> 注册 </button>
        : <button class='login-signup-toggle' 
        onClick = {this.toggleSignup}>Sign Up </button>

        // Signup/Login form only visible if user is not already logged in. 
        if(localStorage.length === 0){
            return (
                <div className='loginSignupForms'>
                    {toggleSigninLanguage}
                    {toggleSignupLanguage} 
                    {this.toggleForm()}
                </div>
            );
        }
    }

    render() {
        return (
            <>
                {this.confirmLogin()}
            </>
        );
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp)(LoginSignupContainer)