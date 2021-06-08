import React, { Component } from 'react'
import {connect} from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import swal from 'sweetalert';
import WithdrawalModal from './WithdrawalModal'
import DepositModal from './DepositModal'
import ProfileDropdown from './ProfileDropdown'

// Redux
import {deleteCheckingAccount} from '../Redux/actions'
import {deleteSavingAccount} from '../Redux/actions'

export class Profile extends Component {

    handleDeleteCheckingAcc = (e) => {
        if(this.props?.user?.checking?.balance !== 0){
            swal('','Please transfer out your funds before deactivting.','error')}
        else{
            fetch(`https://flatironbankapi.herokuapp.com/checkings/${this.props?.user?.checking?.id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(deletedObj => {
                this.props.deleteCheckingAccount(deletedObj)
            })}
    }

    handleDeleteSavingAcc = (e) => {
        if(this.props?.user?.saving?.balance !== 0){
            swal('','Please transfer out your funds before deactivting.','error')}
        else{
            fetch(`https://flatironbankapi.herokuapp.com/savings/${this.props?.user?.saving?.id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(deletedObj => {
                this.props.deleteSavingAccount(deletedObj)
            })}
    }
    
    renderInternalTransfer =(e) => {
        // prevents default needed even for onclick, because of the button css library.
        e.preventDefault()
        this.props.history.push(`/account/${this.props?.user?.saving?.id}/saving/internal_transfer`)
                
    }

    renderModalSignup = () => {

        this.props.history.push('/signup')
    }

    renderEnglishcheckingAccount = () => {

        if(this.props?.user?.checking){
            return (
            <div id='checkingSection'>
            <p>Checking Acc: {this.props.user.checking.acc_num}</p>
            <p>Available Balance: ${this.props.user.checking.balance}</p>
            {/* <p>Status: {accountstatusTenery}</p> */}
            <Link to={`${this.props.match.url}/checking/transactions`} >
            <Button style = {{marginBottom:'5px'}} color='black'>View Transactions</Button>
            </Link>
            <br/>
            <WithdrawalModal/>
            <DepositModal/>
            <br/>
            <Button color='black'style = {{marginTop:'5px'}} onClick = {this.handleDeleteCheckingAcc} >Deactivate Account</Button>
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
    
    renderChinesecheckingAccount = () => {
        // if (this.props.user.checking){

        // const accountstatusTenery = this.props.user.checking.status ? 'Active' : 'Deactived'
        if(this.props?.user?.checking){
            return (
            <div id='checkingSection'>
            <p>支票账户: {this.props.user.checking.acc_num}</p>
            <p>当前余额: ${this.props.user.checking.balance}</p>
            {/* <p>Status: {accountstatusTenery}</p> */}
            <Link to={`${this.props.match.url}/checking/transactions`}>
            <Button style = {{marginBottom:'5px'}} color='black'>查看你的交易记录</Button>
            </Link>
            <br/>
            <WithdrawalModal/>
            <DepositModal/>
            <br/>
            <Button color='black' style = {{marginTop:'5px'}} onClick = {this.handleDeleteCheckingAcc} >取消你的账户</Button>
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

    renderEnglishSavingAccount = () => {
        // ? returns null if undefined.
        if(this.props?.user?.saving){
            return (                    
            <div id='savingSection'>
            <p>Saving Acc: {this.props.user.saving.acc_num}</p>
            <p>Available Balance: ${this.props.user.saving.balance}</p>
            <Link to={`${this.props.match.url}/saving/transactions`}>
                {/* <Button color ='black'>View Transactions</Button> */}
            </Link>
            <Link to={`${this.props.match.url}/saving/transactions`}>
                <Button color ='black' onClick = {this.renderInternalTransfer}>Internal Transfer</Button>
            </Link>
                <Button color ='black' onClick = {this.handleDeleteSavingAcc}>Deactivate Account</Button>
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

    renderChineseSavingAccount = () => {
        if(this.props.user.saving){
            return (                    
            <div id='savingSection'>
            <p>储蓄账户: {this.props.user.saving.acc_num}</p>
            <p>当前余额: ${this.props.user.saving.balance}</p>
            <Link to={`${this.props.match.url}/saving/transactions`}>
                {/* <Button color ='black'>查看你的交易记录</Button> */}
            </Link>
            <Link to={`${this.props.match.url}/saving/transactions`}>
                <Button color ='black' onClick = {this.renderInternalTransfer} >进行内部转账</Button>
            </Link>
                <Button color ='black' onClick = {this.handleDeleteSavingAcc}>取消你的账户</Button>
        </div>)
        }

        else{
            {
            return <div>
            <p>您现在并没有任何的储蓄账户</p>
            <br></br>
            <button onClick = {this.renderModalSignup}>申请储蓄账户</button>
            </div>}
             }
    }

    render() {
        const {user} = this.props
        // To avoid ashy issues, first render if user doesn't exist, just return null. To avoid errors.
        const languageTernrySaving = this.props.language==='Chinese'? this.renderChineseSavingAccount(): this.renderEnglishSavingAccount()
        const languageTernryChecking = this.props.language==='Chinese'? this.renderChinesecheckingAccount(): this.renderEnglishcheckingAccount()
        if (user) {
        return (
            <div>
                <ProfileDropdown/>
                <div id='welcome-section'>
                <h3>Welcome: {user.username}</h3>
                 <h4>Here are you accounts:</h4>
                 </div>
                <div className = 'accContainer'>
                    {languageTernryChecking}
                     <br/>
                     <br/>
                    {languageTernrySaving}
                </div>
                <div id='profile-footer'>
                    {/* <Footer /> */}
                </div>
            </div>
        )
        }
        return null
    }
}

// get states from reducer
// Now props will give you the user state. 
const mstp = (appState) => {
    // console.log(appState)
    return appState
}
export default connect (mstp, {deleteCheckingAccount, deleteSavingAccount})(withRouter(Profile))

