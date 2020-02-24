import React, { Component } from 'react'
import {connect} from 'react-redux'

import TransContainer from './TransContainer'
import CheckingTransPage from './CheckingTransPage'
import { NavLink, Link } from 'react-router-dom'
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'

export class Profile extends Component {

    checkingAccount = () => {
        if(this.props.user.checking){
            return this.props.user.checking.acc_num
        }
        else{
            return 'N/A'
        }
    }

    savingAccount = () => {
        if(this.props.user.saving){
            return this.props.user.saving.acc_num
        }
        else{
            return 'N/A'
        }
    }

    // renderCheckingTrans = () => {
        
    // }


    render() {
        // console.log(this.props)
        const {user} = this.props
        // To avoid ashy issues, first render if user doesn't exist, just return null. To avoid errors.
        if (user.id) {
        return (
            <div>
                <h3>Welcome: {user.username}</h3>
                 <h4>Here are you account:</h4>
                <div className = 'accContainer'>
                    <div id='checkingSection'>
                        <p>Checking Acc: {this.checkingAccount()}</p>
                        <p>Available Balance: ${user.checking.balance}</p>
                        <NavLink to={`${this.props.match.url}/checking/transactions`}>
                            <button>View Transactions</button>
                        </NavLink>
                    </div>
                     <br/>
                     <br/>
                    <div id='checkingSection'>
                        <p>Saving Acc: {this.savingAccount()}</p>
                        <p>Available Balance: ${user.saving.balance}</p>
                        <NavLink to={`${this.props.match.url}/saving/transactions`}>
                            <button>View Transactions</button>
                        </NavLink>
                    </div>
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

