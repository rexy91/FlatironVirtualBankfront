import React, { Component } from 'react'
import TransContainer from './TransContainer'
import {connect} from 'react-redux'

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
    
    render() {
        console.log(this.props)
        // console.log(typeof(this.props.user.checkings))

        const {user} = this.props
        return (
            <div>
                <h3>Welcome: {user.username}</h3>
                 <h4>Here are you accouts:</h4>
                <div className = 'accContainer'>
                    <div id='checkingSection'>
                        <p>Checking Acc: {this.checkingAccount()}</p>
                        <p>Available Balance: ${user.checking.balance}</p>
                        <button>View Transactions</button>
                    </div>
                     <br/>
                     <br/>
                    <div id='checkingSection'>
                        <p>Saving Acc: {this.savingAccount()}</p>
                        <p>Available Balance: ${user.saving.balance}</p>
                        <button>View Transactions</button>
                    </div>
                </div>
            </div>
        )
    }
}

// get states from reducer
// Now this.props will give you the user state. 
const mstp = (appState) => {

    return appState
}
export default connect (mstp)(Profile)

