import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {withRouter} from 'react-router-dom'
import {signUpUser} from '../Redux/actions'
import {signUpAccount} from '../Redux/actions'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import SignupCode from './SignupCode'
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
        // fetch('https://flatironbankapi.herokuapp.com/users', {
        fetch('https://flatironbankapi.herokuapp.com/users', {
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
        fetch(`https://flatironbankapi.herokuapp.com/users/${userId}/new_account`, {
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

    renderSignUpChinese = () => {

      if (this.props.user){
        return  <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <form onSubmit ={this.handleExistingUserSignup}>
                        <p className="h5 text-center mb-4">{this.props.user.username}, 请确认你的资料</p>
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
                          <MDBBtn type = 'submit' color="black">注册账户</MDBBtn>
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
      }
      else {
            
      return         <Form id='signup-form-style' onSubmit = {this.handleSignupSubmit}> 
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>邮箱地址</Form.Label>
                          <Form.Control placeholder="Enter email" name = 'email' 
                             onChange = {this.handleChange} value = {this.state.email}
                             />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>用户名 (长度: 5-10)</Form.Label>
                          <Form.Control placeholder="Enter username" name = 'username' 
                            onChange = {this.handleChange} value = {this.state.username} />
                          </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>密码 (长度: 7-20)</Form.Label>
                          <Form.Control type="password" placeholder="Password" name = 'password' 
                            onChange = {this.handleChange} value = {this.state.password} />
                        </Form.Group>
                        <Form.Group style={{display:'inline'}}>
                          <b><label>账号类型</label></b>
                          <select name="accountType" id="">
                              <option value="checking">支票账号</option>
                              <option value="saving">储蓄账号></option>
                              <br/><br/>
                          </select>
                        </Form.Group>
                        <MDBBtn type = 'submit' id='register-button' >注册</MDBBtn>
                      </Form>
      }
  }
    
    renderSignUp = () => {
        
        if (this.props.user){
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
              
        return         <Form id='signup-form-style' onSubmit = {this.handleSignupSubmit}> 
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" name = 'email' 
                               onChange = {this.handleChange} value = {this.state.email}
                               />
                          </Form.Group>
                          <Form.Group>
                          <Form.Label>Username (length: 5-10)</Form.Label>
                            <Form.Control placeholder="Enter username" name = 'username' 
                              onChange = {this.handleChange} value = {this.state.username} />
                            </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password (length: 7-20)</Form.Label>
                            <Form.Control type="password" placeholder="Password" name = 'password' 
                              onChange = {this.handleChange} value = {this.state.password} />
                          </Form.Group>
                          <Form.Group style={{display:'inline'}}>
                            <b><label>Account Type</label></b>
                            <select name="accountType" id="">
                                <option value="checking">Checking</option>
                                <option value="saving">Saving</option>
                                <br/><br/>
                            </select>
                          </Form.Group>
                          <MDBBtn type = 'submit' id='register-button' >Register</MDBBtn>
                        </Form>
        }
    }
    
render() {
        console.log(this.props)
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


