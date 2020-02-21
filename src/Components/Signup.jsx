import React, { Component } from 'react'
import {signUpUser} from '../Redux/actions'
import {connect} from 'react-redux'

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

                localStorage.setItem('token',responseFromServer.token)
                this.props.signUpUser(responseFromServer)
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
                        <option value="checkings">Checkings</option>
                        <option value="savings">Savings</option>
                        <option value="creditcards">Credit Cards</option>
                    </select>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

                          //   curlies!!!!
export default connect(null, {signUpUser})(Signup)
