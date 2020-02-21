import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {saveUserToState} from '../Redux/actions'
export class Login extends Component {
    // This state has nothign to do with redux, just senidng this up as object. 
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            // This will make it work for any name, as long as name matches.
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
          })
            .then(r => r.json())
            .then(responseFromServer => {

                //responseFromServer.user.checkings[0].acc_num
                //responseFromServer.user.checkings[0].balance
                console.log(responseFromServer)
                localStorage.setItem('token',responseFromServer.token)
                this.props.saveUserToState(responseFromServer)
                this.props.history.push(`/account/${responseFromServer.user.id}`)
            })
        }
        
    render() {
        return (
            <div>
                <form id='login-form' onSubmit ={this.handleLoginSubmit}>
                    <label >Username: </label>
                    <input type="text" name='username' placeholder = 'username' onChange = {this.handleChange} value = {this.state.username}/> <br />
                    <label >Password: </label>
                    <input type="password" name='password' placeholder='password' onChange = {this.handleChange} value={this.state.password}/> <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}


// Outside of class
export default connect(null, {saveUserToState})(withRouter(Login));
// Import saveUserToState from Actions, then pass state up to store with that function.
// Instead of passing down from App.js
