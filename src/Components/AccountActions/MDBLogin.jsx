import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveUserToState} from '../Redux/actions'
import {Form, Button} from 'react-bootstrap'
import swal from 'sweetalert'

import LoadingOverlay from 'react-loading-overlay'

export class MDBLogin extends Component {

  state = {
    username: '',
    password: '',
    isActive: false
}
  handleLoginSubmit = (e) => {
    
    e.preventDefault()

    this.setState({
      isActive: !this.state.isActive
    })

    // fetch('http://localhost:3000/login', {
    fetch('https://flatironbankapi.herokuapp.com/login', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(r => r.json())
        .then(responseFromServer => {
            if(responseFromServer?.user?.id){
            localStorage.setItem('token',responseFromServer.token)
            this.props.saveUserToState(responseFromServer)
            this.props.history.push(`/account/${responseFromServer.user.id}`)
            }
            else {
              this.setState({
                isActive: !this.state.isActive
              })
              swal(`Invalid Credentials`,
              `${responseFromServer.errors}`,
              "error")
            }
        })
    }
    
    handleChange = (e) => {
      this.setState({
          // This will make it work for any name, as long as name matches.
          [e.target.name]: e.target.value
      })
  }

renderLoginChinese = () => {
  if(localStorage.length === 0){
    {return <div id='login-form'>
              <Form id='login-form-style'  onSubmit ={this.handleLoginSubmit}> 
            <Form.Group controlId="formBasicEmail">
              <Form.Label>用戶名</Form.Label>
              <Form.Control placeholder="Enter email" name = 'username' 
                onChange = {this.handleChange} value = {this.state.username} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>密码</Form.Label>
              <Form.Control type="password" placeholder="Password" name = 'password' 
                onChange = {this.handleChange} value = {this.state.password} />
            </Form.Group>

            <MDBBtn type = 'submit' id='register-button' >登入</MDBBtn>
          </Form>
    </div>}
}}

renderLoginEnglish =() => {
  if(localStorage.length === 0){
    {return <div id='login-form'>
              <Form id='login-form-style'  onSubmit ={this.handleLoginSubmit}> 
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter email" name = 'username' 
                onChange = {this.handleChange} value = {this.state.username} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name = 'password' 
                onChange = {this.handleChange} value = {this.state.password} />
            </Form.Group>
            <MDBBtn type = 'submit' id='register-button' >Submit</MDBBtn>
            
          </Form>
    </div>}
}
}
    render() {
        return (
            <>
                <LoadingOverlay
                active={this.state.isActive}
                spinner
                text='Signing in...'
                >
              </LoadingOverlay>
              {this.props.language === 'Chinese'? this.renderLoginChinese() : this.renderLoginEnglish()}
            </>
        )
    }
}

const mstp = (appState) => {
  return appState
}
 
export default connect(mstp, {saveUserToState})(withRouter(MDBLogin));


