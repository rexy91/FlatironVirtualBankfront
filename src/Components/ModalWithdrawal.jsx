import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onlineWithdrawal} from './Redux/actions'
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom'
export class ModalWithdrawal extends Component {

        // Refactor later : 
    handleWithdrawal = (e) => {
        e.preventDefault()
        const amount = e.target.amount.value
        const checkingId = this.props.user.checking.id
    if (amount <= 0) {
        swal('','Please enter a valid amount', 'error')
    }
      else if (this.props.user.checking.balance <= 0){
        swal('','insufficient funds', 'error') }
      else if (amount > this.props.user.checking.balance) {
        swal('','insufficient funds', 'error')
      }
      else {
          fetch(`http://localhost:3000/checkings/withdrawal/${checkingId}`, {
              method:'PATCH',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body:JSON.stringify({
                amount,
                checkingId
              })
          })
          .then(res => res.json())
          // User obj here contains the new checking trans array. 
          .then(updatedUserObj => {
            console.log('here')
            // Has to be called with this.props *** 
            this.props.onlineWithdrawal(updatedUserObj)
          })
          // this.props.history.push(`/account/${this.props.user.id}`)
          // this.props.history.goBack()
      }}

  render() {
    return (
      <Modal trigger={<Button color='black'>Withdrawal</Button>} centered={false}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Withdrawal</Header>
          <form onSubmit = {this.handleWithdrawal}>
            <p>Available balance: ${this.props.user.checking.balance} </p>
            <label htmlFor="">Withdrawal Amount</label>
            <input type="number" name = 'amount' />
            <br/>
            <input type="submit"/>
          </form>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    )
  }
}

// Need to get current user state.
const mstp = (appState) => {

    return appState
  }

export default connect(mstp, {onlineWithdrawal})(withRouter(ModalWithdrawal))
