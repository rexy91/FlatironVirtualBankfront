import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {withRouter} from 'react-router-dom'
import {signUpUser} from './Redux/actions'
import {connect} from 'react-redux'
import swal from 'sweetalert';

export class MDBSignup extends Component {
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
                // console.log(!responseFromServer.errors)
                // debugging
                // console.log(responseFromServer)
                // console.log(responseFromServer.user)
                // console.log(responseFromServer.user.signup_type === 'Checking')
            if (!responseFromServer.errors) {
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
        <div id = 'signup-form'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <form onSubmit ={this.handleSignupSubmit}>
                  <p className="h5 text-center mb-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput label="Username" icon="user" group type="text" validate error="wrong"
                      success="right" name = 'username' onChange = {this.handleChange} />
                    <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                      success="right" name = 'email' onChange = {this.handleChange} />
                    <MDBInput label="Your password" icon="lock" group type="password" validate 
                      name = 'password' onChange = {this.handleChange}/>
                      
                  </div>
                  <div className="text-center">
                    <select name="accountType" id="">
                        <option value="checking">Checking</option>
                        <option value="saving">Saving</option>
                        <option value="creditcard">Credit Card</option>
                        <br/><br/>
                    </select>
                    <MDBBtn type = 'submit' color="black">Register</MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        )
    }
}

export default connect(null, {signUpUser})(withRouter(MDBSignup))
