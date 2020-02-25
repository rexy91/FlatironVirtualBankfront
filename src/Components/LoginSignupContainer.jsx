import React, { Component } from 'react';
import MDBLogin from './MDBLogin'
import MDBSignup from './MDBSignup'
import Signup from './Signup'
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
        return (
            <div >
                <button class='login-signup-toggle' onClick = {this.toggleLogin}> Login </button>
                <button class='login-signup-toggle' onClick = {this.toggleSignup}>Sign up</button>
                {this.toggleForm()}
            </div>
        );
    }
}

export default LoginSignupContainer;