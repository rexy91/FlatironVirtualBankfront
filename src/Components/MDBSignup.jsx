import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {withRouter} from 'react-router-dom'
import {signUpUser} from './Redux/actions'
import {signUpAccount} from './Redux/actions'
import {connect} from 'react-redux'
import SignupCode from '../Components/SignupCode'
import swal from 'sweetalert';

class MDBSignup extends Component {
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
    handleSignupGenCode = (e) => {
        
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
                console.log(responseFromServer)
                console.log('here')
                this.props.signUpUser(responseFromServer) 
                this.props.history.push(`/signup/verify_account`)
                // this.props.history.push(`/account/${responseFromServer.user.id}`) 

              // localStorage.setItem('token',responseFromServer.token)
                
                if (responseFromServer.signup_type === 'Checking'){
                    // swal(`Welcome, ${responseFromServer.user.username}`,
                    // "$5000 signup bonus has been desposited into you checking account.",
                    // "success");     
                } else if (responseFromServer.signup_type === 'Saving'){
                    // swal(`Welcome, ${responseFromServer.user.username}`,
                    // "$5000 signup bonus has been desposited into you saving account.",
                    // "success"); 
                }}
            else {
                //    console.log('fjsdjfsdjfjdsf')
                swal(`Unsuccessful Signup`,
                `${responseFromServer.errors}`,
                "error")
            }
            })
    }

    handleExistingUserSignup = (e) => {
        e.preventDefault()
        const accType = e.target.accountType.value
        const userId = this.props.user.id
        fetch(`http://localhost:3000/users/${userId}/new_account`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: 'application/json'
            },
            body: JSON.stringify(
                {
                  accType,
                  userId
                }
                )
          })
          .then(res => res.json())
          .then(userObj => {
              this.props.history.push(`/account/${userObj.user.id}`)
              if (userObj.signup_type === 'Checking'){
                swal(`Thanks for signing up,`,
                "$5000 signup bonus has been desposited into you checking account.",
                "success")
              }
              else if (userObj.signup_type === 'Saving'){
                swal(`Thanks for signing up,`,
                "$5000 signup bonus has been desposited into you saving account.",
                "success")
              }
              this.props.signUpAccount(userObj)

          })
    }

    // If checking acc exist, render 'Saving', wiseversa.

        checkingOrSaving = () => {
      //     if (this.props.user.checking || this.props.user.checking === null) {
      //       return <option value = 'saving'>Saving</option>
      //     }
      //     else if (!this.props.userState.checking){
      //       return <option value = 'saving'>Saving</option>
      //     }
      //     else if (this.props.userState.saving){
      //       return <option value = 'saving'>Saving</option>
      //     }
      //     else if (!this.props.userState.saving){
      //       return <option value = 'saving'>Saving</option>
      //     }

            if (this.props.user){
              console.log('existed')
                if(this.props.user.checking){
                    return <option value = 'saving' >Saving</option>
                }
                else {
                    return <option value = 'checking' >Checking</option>
                }
            }
       }

    renderSignUp = () => {
        // console.log(this.props)
        // If existing user trying to signup, render different input.
        
        if (this.props.user){
          // console.log("yoo")
          // console.log(this.props)
          return  <MDBContainer>
                    <MDBRow>
                      <MDBCol md="6">
                        <form onSubmit ={this.handleExistingUserSignup}>
                          <p className="h5 text-center mb-4">{this.props.user.username}, please confirm your info</p>
                          <div className="grey-text">
                            <MDBInput label="Username" icon="user" group type="text" validate error="wrong"
                              success="right" name = 'username' value ={this.props.user.username}/>
                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                              success="right" name = 'email' value={this.props.user.email} />
                          </div>
                          <div className="text-center">
                            <select name="accountType" id="">
                                {/* <option value="checking">Checking</option> */}
                                {this.checkingOrSaving()}
                            </select>
                            <MDBBtn type = 'submit' color="black">Register Account</MDBBtn>
                          </div>
                        </form>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
        }
        else {
          // console.log(this.props)
         return  <MDBContainer>
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
                    <b><label>Account Type</label></b>
                    <select name="accountType" id="">
                        <option value="checking">Checking</option>
                        <option value="saving">Saving</option>
                        <br/><br/>
                    </select>
                    <MDBBtn type = 'submit' id='register-button' >Register</MDBBtn>
                    {/* <SignupCode /> */}
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        }
    }
    
render() {
        // console.log(this.props)
        return (
        <div id = 'signup-form'>
          {this.renderSignUp()}
        </div>
        )
    }
}

const mstp = (appState) => {

  return appState
}

export default connect(mstp, {signUpUser, signUpAccount})(withRouter(MDBSignup))

