import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateInternalTransfer} from '../Redux/actions'
import swal from 'sweetalert';
class InternalTransfer extends Component {

    handleInternalTransfer =(e) => {
            e.preventDefault()
            console.log('ere')
            const amount = e.target.amount.value
            const checkingId = this.props?.user?.checking?.id
            const savingId = this.props?.user?.saving?.id
            console.log(savingId)

    fetch(`https://flatironbankapi.herokuapp.com/savings/${this.props?.user?.saving?.id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                amount,
                checkingId,
                savingId
            })
        })
        .then( res=> res.json())
        .then(userObj => {
            this.props.updateInternalTransfer(userObj)
        })
        swal('','Transfer Made.','success')
    }
   

    render() {
        return (
            <div id='internal_transfer'>
                <form onSubmit = {this.handleInternalTransfer} class='ui form'>
                    <div class ='field'>
                        <label class ='internal_text'htmlFor="">Available Balance: ${this.props?.user?.saving?.balance} </label>
                        <label class ='internal_text'htmlFor="">Transfer Amount</label>
                        <input name = 'amount' type="number"/>
                    </div>
                    <p class ='internal_text' >Transfering To Checking Acc: {this.props?.user?.checking?.acc_num}</p>
                    <input type="submit"/>
                </form>
            </div>

        )
    }
}

const mstp = (appState) => {
    return {appState}
}

export default connect(mstp, {updateInternalTransfer})(InternalTransfer)