import React, { Component } from 'react';
import Login from './Login'
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

    
    toggleForm  = () =>  this.state.login ? <Login /> : <Signup />

    render() {
        return (
            <div>
                <button onClick = {this.toggleLogin}> Login </button>
                <button onClick = {this.toggleSignup}>Sign up</button>
                {this.toggleForm()}
            </div>
        );
    }
}

export default LoginSignupContainer;