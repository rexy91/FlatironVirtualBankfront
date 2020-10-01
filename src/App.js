import React, { Component } from 'react'
import './App.css';

import Chart from './Components/AccountActions/Chart'
import 'bootstrap/dist/css/bootstrap.min.css'
//Redux
import {saveUserToState} from './Components/Redux/actions'
import {saveNewsToStore} from './Components/Redux/actions'
import { connect } from 'react-redux';

// Components:
import MDBLogin from './Components/AccountActions/MDBLogin'
import Home from './Components/Home'
import Profile from './Components/Profile'

// React Routing:
import {Switch, Route} from 'react-router'
import LoginSignupContainer from './Components/AccountActions/LoginSignupContainer'
import {withRouter} from 'react-router-dom'
import CheckingTransPage from './Components/AccountActions/CheckingTransPage';
import CheckingTransGrid from './Components/AccountActions/CheckingTransGrid'
import SavingTransPage from './Components/SavingTransPage'
import Verify from './Components/Verify'
import News from './Components/Newscontainer'
import MDBSignup from './Components/AccountActions/MDBSignup'
import HousingContainer from './Components/HousingContainer'
import Personalinfo from './Components/AccountActions/Personalinfo'
import InstantTransfer from './Components/AccountActions/InstantTransfer'
import Newscontainer from './Components/Newscontainer'
import  InternalTransfer  from './Components/AccountActions/InternalTransfer'

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
                    // console.log(newsRes.articles)
                    // console.log('App.js', newsRes.articles)
                    // Don't want all the articles 
                    let filteredNews = newsRes.articles.splice(0,9)
                    this.props.saveNewsToStore(filteredNews)
    
                })
  }

  getCheckingTransactions = () =>{
      // console.log(this.props.user.checking.transactions)
  }
  
  render() {
    // console.log(this.props)
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
          <Route exact path = '/' render = { Home } />
          <Route exact path = '/account/:id/profile' component = { Personalinfo} />
          <Route exact path = '/login' render = { (routerProps) => <MDBLogin {...routerProps} />} />
          <Route exact path = '/account/:id' component = { Profile } />                                                  {/* pass down current user state */}
          <Route exact path = '/signup' render = { (routerProps) => <MDBSignup {...routerProps}/>} /> 
          <Route exact path ='/account/:id/expense' render = {() => <Chart />} />
          <Route exact path ='/account/:id/instant_transfer' render = {() => <InstantTransfer />}/> 
          <Route exact path = '/signup/verify_account'  component = { Verify }/>
          <Route exapt path ='/account/:id/saving/internal_transfer' render ={ () => <InternalTransfer user={this.props.user} />}/>
          <Route exact path = '/account/:id/checking/transactions'
              render = {(routerProps) =>
           <CheckingTransGrid {...routerProps}
          //  Pass user to this component through url
           user = {this.props.user} 
           checkingOrSaving = {"checking"}
           />} />
           
          <Route exact path = '/account/:id/saving/transactions' render = {() => <SavingTransPage user = {this.props.user}
           />} />

           
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
