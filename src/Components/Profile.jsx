import React, { Component } from 'react'
import {connect} from 'react-redux'
import TransContainer from './TransContainer'
import CheckingTransPage from './CheckingTransPage'
import { NavLink, Link } from 'react-router-dom'
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'
import { Signup } from './Signup'

export class Profile extends Component {

    checkingAccount = () => {
        if(this.props.user.checking){
            return (
            <div id='checkingSection'>
            <p>Checking Acc: {this.props.user.checking.acc_num}</p>
            <p>Available Balance: ${this.props.user.checking.balance}</p>
            <NavLink to={`${this.props.match.url}/checking/transactions`}>
            <button>View Transactions</button>
            </NavLink>
            </div>
            )
        }
        else{
            return "You currently don't have a Checking Account."
        }
    }

    savingAccount = () => {
        if(this.props.user.saving){
            return (                    
            <div id='savingSection'>
            <p>Saving Acc: {this.props.user.saving.acc_num}</p>
            <p>Available Balance: ${this.props.user.saving.balance}</p>
            <NavLink to={`${this.props.match.url}/saving/transactions`}>
                <button>View Transactions</button>
            </NavLink>
        </div>)
        }
        else{
            return "You currently don't have a Saving Account"
        }
    }

    render() {
        const {user} = this.props
        // To avoid ashy issues, first render if user doesn't exist, just return null. To avoid errors.
        if (user.id) {
        return (
            <div>
                <h3>Welcome: {user.username}</h3>
                 <h4>Here are you accounts:</h4>
                <div className = 'accContainer'>
                    {this.checkingAccount()}
                     <br/>
                     <br/>
                    {this.savingAccount()}
                </div>
            </div>
        )
        }
        return null
    }
}

// get states from reducer
// Now this.props will give you the user state. 
const mstp = (appState) => {

    return appState
}
export default connect (mstp)(withRouter(Profile))

