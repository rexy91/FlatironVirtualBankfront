import React, { Component } from 'react'
import {signUpUser} from './Redux/actions'
import {connect} from 'react-redux'
import swal from 'sweetalert';

import {withRouter} from 'react-router-dom'
export class Signup extends Component {
    state = {
        username: '',
        password: '',
        email: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSignupSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: 'application/json'
            },
            body: JSON.stringify(
                {...this.state, acc_type:e.target.accountType.value}
                )
          })
            .then(r => r.json())
            .then(responseFromServer => {
                console.log(!responseFromServer.errors)
                // debugging
                // console.log(responseFromServer)
                // console.log(responseFromServer.user)
                // console.log(responseFromServer.user.signup_type === 'Checking')
                
            if (!responseFromServer.errors) {
                console.log(responseFromServer)
                this.props.history.push(`/account/${responseFromServer.user.id}`)
                localStorage.setItem('token',responseFromServer.token)
                this.props.signUpUser(responseFromServer)
                if (responseFromServer.signup_type === 'Checking'){
                    swal(`Welcome, ${responseFromServer.user.username}`,
                    "$5000 signup bonus has been desposited into you checking account.",
                    "success");     
                } else if (responseFromServer.signup_type === 'Saving'){
                    swal(`Welcome, ${responseFromServer.user.username}`,
                    "$5000 signup bonus has been desposited into you saving account.",
                    "success"); 
                }}
            else {
                //    console.log('fjsdjfsdjfjdsf')
                swal(`Unsuccessful Signup`,
                `${responseFromServer.errors}`,
                "error")
            }
            }) 
    }

    render() {
        return (
            <div>
                <form id='signup-form' onSubmit ={this.handleSignupSubmit}>
                    <label >Username: </label>
                    <input type="text" name='username' placeholder = 'username' onChange = {this.handleChange} value = {this.state.username}/> <br/>
                    <label >Password: </label>
                    <input type="password" name='password' placeholder='password' onChange = {this.handleChange} value={this.state.password}/> <br/>
                    <label >Email: </label>
                    <input type="textarea" name='email' placeholder = 'email address' onChange = {this.handleChange} value = {this.state.email}/> <br />
                    <select name="accountType" id="">
                        <option value="checking">Checking</option>
                        <option value="saving">Saving</option>
                        <option value="creditcard">Credit Card</option>
                    </select>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
                          //   curlies!!!!
export default connect(null, {signUpUser})(withRouter(Signup))
