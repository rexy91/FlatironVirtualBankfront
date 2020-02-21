import React, { Component } from 'react'
import './App.css';

//Redux
import {saveUserToState} from './Redux/actions'
import { connect } from 'react-redux';
import {mstp} from './Redux/actions';

// Components:
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'

// React Routing:
import {Switch, Route} from 'react-router'
import LoginSignupContainer from './Components/LoginSignupContainer';
import {withRouter} from 'react-router-dom'

export class App extends Component {

  componentDidMount(){
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.token) {
          this.props.saveUserToState(resp);
        }
      })
    }
  }

  // fetchUserInfo = () => {

  // }

  render() {

    return (
      <div className = 'app'>
        
        {localStorage.getItem ? null : <LoginSignupContainer />}

        {/* routing */}
        <Switch>
          <Route exact path = '/' render = { Home } />
          <Route exact path = '/login' render = { (routerProps) => <Login {...routerProps} />} />
          <Route exact path = '/account/:id' component = { Profile } /> 
        </Switch>
      </div>
    )
  }
}

export default connect(mstp, {saveUserToState})(withRouter(App))
