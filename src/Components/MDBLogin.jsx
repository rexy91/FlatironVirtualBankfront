import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveUserToState} from './Redux/actions'
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

renderLogin =() => {
  if(localStorage.length === 0){
    {return <div id='login-form'>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit ={this.handleLoginSubmit}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <p>Username length: between 5-10</p>
              <MDBInput name = 'username' label="Type your username" icon="user-alt" group type="username" 
               onChange = {this.handleChange} value = {this.state.username} />
               <p>Password length: between 7-20</p>
              <MDBInput name = 'password' label="Type your password" icon="lock" group type="password"
               onChange = {this.handleChange} value = {this.state.password} />
            </div>
            <div className="text-center">
              <MDBBtn id='login-button' type = 'submit'>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>}
}
else{
  // console.log('there')
}
}
    render() {
      // console.log(this.state)
        return (
            <>
              {this.renderLogin()}
            </>
/* <div id='login-form'>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit ={this.handleLoginSubmit}>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <p>Username length: between 5-10</p>
          <MDBInput name = 'username' label="Type your username" icon="user-alt" group type="username" 
           onChange = {this.handleChange} value = {this.state.username} />
           <p>Password length: between 7-20</p>
          <MDBInput name = 'password' label="Type your password" icon="lock" group type="password"
           onChange = {this.handleChange} value = {this.state.password} />
        </div>
        <div className="text-center">
          <MDBBtn id='login-button' type = 'submit'>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div> */
        )
    }
}

export default connect(null, {saveUserToState})(withRouter(MDBLogin));


