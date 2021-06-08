import React, { Component } from 'react'
import './App.css';

import Chart from './Components/AccountActions/Chart'


//Redux
import { saveUserToState } from './Components/Redux/actions'
import { saveNewsToStore } from './Components/Redux/actions'
import { connect } from 'react-redux';

// Components:
import AddCreditCard from './Components/Transactions/AddCreditCard'
import MDBLogin from './Components/AccountActions/Signup/MDBLogin'
import Home from '../src/Components/Layout/Home'
import Profile from './Components/Profile/Profile'
import CheckingTransGrid from './Components/AccountActions/CheckingTransGrid'
import Verify from './Components/Verify'
import MDBSignup from './Components/AccountActions/Signup/MDBSignup'
import Personalinfo from './Components/AccountActions/Personalinfo'
import InstantTransfer from './Components/Transactions/InstantTransfer'
import InternalTransfer  from '../src/Components/Transactions/InternalTransfer'

// React Routing:
import {Switch, Route} from 'react-router'
import LoginSignupContainer from './Components/AccountActions/Signup/LoginSignupContainer'
import {withRouter} from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')
      fetch("https://flatironbankapi.herokuapp.com/persist", {
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
            // Convert inso yyyy--mm--dd format 
            let todayDate = new Date
            let newDate = todayDate.toISOString().slice(0,10)
            fetch(`http://newsapi.org/v2/everything?from=${newDate}-&sortBy=publishedAt&apiKey=b5b343b90e4d4f0e89f4da475f9e01d8&q=finance`)
            .then(res => res.json())
            .then(newsRes => { 
                    // Don't want all the articles
                    let filteredNews = newsRes.articles.splice(0,9)
                    this.props.saveNewsToStore(filteredNews)
    
                })
  }
  
  render() {
    return (    
      <div className = 'app'>
        {/* <InstantTransfer /> 
        <MDBLogin />
        <LoginSignupContainer/>
        <News/>
        <Home/> */}
        {localStorage.getItem ? null : <LoginSignupContainer />}
        {/* routing */}
        {/* <Newscontainer /> */}
        <Switch>
          <Route exact path = '/addcc' component = { AddCreditCard }/> 
          <Route exact path = '/' render = { Home } />
          <Route exact path = '/account/:id/profile' component = { Personalinfo} />
          <Route exact path = '/login' render = { (routerProps) => <MDBLogin {...routerProps} />} />
          <Route exact path = '/account/:id' component = { Profile } />{/* pass down current user state */}
          <Route exact path = '/signup' render = { (routerProps) => <MDBSignup {...routerProps}/>} /> 
          <Route exact path ='/account/:id/expense' render = {() => <Chart />} />
          <Route exact path ='/account/:id/instant_transfer' render = {() => <InstantTransfer />}/> 
          <Route exact path = '/signup/verify_account'  component = { Verify }/>
          <Route exapt path ='/account/:id/saving/internal_transfer' render ={ () => <InternalTransfer user={this.props.user} />}/>
          <Route exact path = '/account/:id/checking/transactions'
              render = {(routerProps) =>
           <CheckingTransGrid 
           {...routerProps}
          // Pass user to this component through url
           user = {this.props.user} 
           checkingOrSaving = {"checking"}
           />} />
           
          {/* <Route exact path = '/account/:id/saving/transactions' render = {() => <SavingTransGrid user = {this.props.user}
           />} />  */}
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
