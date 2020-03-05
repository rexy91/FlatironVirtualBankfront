import React, { Component } from 'react';
import MDBLogin from './MDBLogin'
import MDBSignup from './MDBSignup'
import Signup from './Signup'
import {connect} from 'react-redux'
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

    
    // toggleForm  =  this.state.login ? <Login /> : <Signup />

    toggleForm  = () =>  this.state.login ? <MDBLogin /> : <MDBSignup />

    render() {

        const toggleSigninLanguage = this.props.appState.language==='Chinese'? <button id ='login-toggle'class='login-signup-toggle' onClick = {this.toggleLogin}> 登入 </button>
        : <button id='login-toggle' class='login-signup-toggle' onClick = {this.toggleLogin}>Log In </button>
        const toggleSignupLanguage = this.props.appState.language==='Chinese'? <button class='login-signup-toggle' onClick = {this.toggleLogin}> 注册 </button>
        : <button class='login-signup-toggle' onClick = {this.toggleSignup}>Sign Up </button>
        // console.log(this.props.appState.language)
        return (
            <div className='loginSignupForms'>
                {/* <button class='login-signup-toggle' onClick = {this.toggleLogin}> Login </button> */}
                {toggleSigninLanguage}
                {toggleSignupLanguage}
                {this.toggleForm()}
            </div>
        );
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp)(LoginSignupContainer)