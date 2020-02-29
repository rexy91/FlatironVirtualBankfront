import React, { Component } from 'react'
import {connect} from 'react-redux'
import TransContainer from './TransContainer'
import CheckingTransPage from './CheckingTransPage'
import { NavLink, Link } from 'react-router-dom'
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'
import { Signup } from './Signup'
import { Button } from 'semantic-ui-react'
import swal from 'sweetalert';
import ModalDeposit from './ModalDeposit'
import ModalWithdrawal from './ModalWithdrawal'
import MDBSignup from './MDBSignup'
// Redux
import {deleteAccount} from './Redux/actions'
import { Modal } from 'semantic-ui-react'
import ProfileDropdown from './ProfileDropdown'
// import { MDBSignup } from './MDBSignup'

export class Profile extends Component {

    handleDeleteAcc = (e) => {
        if(this.props.user.checking.balance !== 0){
            swal('Please transfer out your funds before deactivating.')
        }
        else{
        this.props.deleteAccount(this.props.user.checking.id)
    }}

    renderModalSignup = () => {
        // console.log('here')
        this.props.history.push('/signup')
    }

    checkingAccount = () => {
        // if (this.props.user.checking){

        // const accountstatusTenery = this.props.user.checking.status ? 'Active' : 'Deactived'
        if(this.props.user.checking){
            return (
            <div id='checkingSection'>
            <p>Checking Acc: {this.props.user.checking.acc_num}</p>
            <p>Available Balance: ${this.props.user.checking.balance}</p>
            {/* <p>Status: {accountstatusTenery}</p> */}
            <Link to={`${this.props.match.url}/checking/transactions`}>
            <Button color='black'>View Transactions</Button>
            </Link>
            <br/>
            <ModalWithdrawal />
            <br/>
            <Button color='black' onClick = {this.handleDeleteAcc} >Deactivate Account</Button>
            <ModalDeposit /> 
            </div>
            )
        }
        else{
            {
                return <div>
                <p>You currently don't have a checking account.</p>
                <br></br>
                <button onClick = {this.renderModalSignup}>Sign Up</button>
                </div>}       
        }
    }

    savingAccount = () => {
        if(this.props.user.saving){
            return (                    
            <div id='savingSection'>
            <p>Saving Acc: {this.props.user.saving.acc_num}</p>
            <p>Available Balance: ${this.props.user.saving.balance}</p>
            <Link to={`${this.props.match.url}/saving/transactions`}>
                <Button color ='black'>View Transactions</Button>
            </Link>
                <Button color ='black' onClick = {this.handleDeleteAcc}>Deactivate Account</Button>
                
        </div>)
        }
        else{
            {
            return <div>
            <p>You currently don't have a saving account.</p>
            <br></br>
            <button onClick = {this.renderModalSignup}>Sign Up</button>
            </div>}
             }
    }

    render() {
        // console.log(this.props)
        const {user} = this.props
        // To avoid ashy issues, first render if user doesn't exist, just return null. To avoid errors.
        if (user) {
        return (
            <div>
                <ProfileDropdown />
                <div id='welcome-section'>
                <h3>Welcome: {user.username}</h3>
                 <h4>Here are you accounts:</h4>
                 </div>
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
export default connect (mstp, {deleteAccount})(withRouter(Profile))

