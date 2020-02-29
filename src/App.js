import React, { Component } from 'react'
import './App.css';

import Header from './Components/Header'
import Chart from './Components/Chart'
//Redux
import {saveUserToState} from './Components/Redux/actions'
import {saveNewsToStore} from './Components/Redux/actions'
import { connect } from 'react-redux';

// Components:
import MDBLogin from './Components/MDBLogin'
import Home from './Components/Home'
import Profile from './Components/Profile'

// React Routing:
import {Switch, Route} from 'react-router'
import LoginSignupContainer from './Components/LoginSignupContainer';
import {withRouter} from 'react-router-dom'
import CheckingTransPage from './Components/CheckingTransPage';
import SavingTransPage from './Components/SavingTransPage'
import MDBSignup from './Components/MDBSignup';

class App extends Component {

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
          localStorage.setItem('token',resp.token)
          this.props.saveUserToState(resp);
        }
      })
    }
    console.log('here')
    
    fetch('http://newsapi.org/v2/everything?q=finance&from=2020-01-28&sortBy=publishedAt&apiKey=b5b343b90e4d4f0e89f4da475f9e01d8&results=5')
    .then(res => res.json())
    .then(newsArray => { 
        console.log('here')
            saveNewsToStore(newsArray)
        })
        
  }

  // componentDidMount(){
  //   console.log('here')

  //           }
  
  getCheckingTransactions = () =>{
      // console.log(this.props.user.checking.transactions)
  }

  render() {
    // console.log(this.props)
    return (    
      <div className = 'app'>
        {localStorage.getItem ? null : <LoginSignupContainer />}
        {/* routing */}
        <Switch>
          <Route exact path = '/' render = { Home } />
          <Route exact path = '/login' render = { (routerProps) => <MDBLogin {...routerProps} />} />
          <Route exact path = '/account/:id' component = { Profile } />                                                                      {/* pass down current user state */}
          <Route exact path = '/signup' render = { (routerProps) => <MDBSignup {...routerProps}/>} /> 
          <Route exact path = '/account/:id/checking/transactions'
              render = {(routerProps) =>
           <CheckingTransPage {...routerProps} 
           user = {this.props.user}
           />} />
          <Route exact path = '/account/:id/saving/transactions' 
              render = {(routerProps) =>
           <SavingTransPage {...routerProps} 
              user = {this.props.user}
           />} />
           <Route exact path ='/account/:id/expense' render = {() => <Chart />} />
        </Switch>
      </div>
    )
  }
}

const mstp = (appState) => {
    return {
      user: appState.user // Now App.props has user 
    }
}

export default connect(mstp, {saveUserToState, saveNewsToStore})(withRouter(App))
