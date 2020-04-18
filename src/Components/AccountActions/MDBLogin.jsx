import { MDBBtn } from 'mdbreact';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveUserToState} from '../Redux/actions'
import {Form, Button} from 'react-bootstrap'
export class MDBLogin extends Component {

  state = {
    username: '',
    password: ''
}
  handleLoginSubmit = (e) => {

    e.preventDefault()
    fetch('https://flatironbankapi.herokuapp.com/login', {
      // fetch('https://flatironbankapi.herokuapp.com/login', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
        .then(r => r.json())
        .then(responseFromServer => {
            if(responseFromServer.user.id){
            //responseFromServer.user.checkings[0].acc_num
            //responseFromServer.user.checkings[0].balance
            localStorage.setItem('token',responseFromServer.token)
            this.props.saveUserToState(responseFromServer)
            this.props.history.push(`/account/${responseFromServer.user.id}`)
            }
            else {
              alert('invalid')
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
            {/* <Button variant="white" type="submit" style={{opacity: '0.6'}}>
              Submit
            </Button> */}
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
            {/* <Button variant="white" type="submit" style={{opacity: '0.6'}}>
              Submit
            </Button> */}
            <MDBBtn type = 'submit' id='register-button' >Submit</MDBBtn>
          </Form>
    </div>}
}
else{
  // console.log('there')
}
}
    render() {
        return (
            <>
              {this.props.language === 'Chinese'? this.renderLoginChinese() : this.renderLoginEnglish()}
            </>
        )
    }
}

const mstp = (appState) => {
  return appState
}
 
export default connect(mstp, {saveUserToState})(withRouter(MDBLogin));


