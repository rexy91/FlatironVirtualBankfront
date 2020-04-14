import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import { Button, Header, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onlineWithdrawal} from '../Redux/actions'
import swal from 'sweetalert'

export class WithdrawalModal extends Component {

    state = {
        show:false
    }

    handleWithdrawal = (e) => {
        e.preventDefault()

        const amount = e.target.amount.value
        const checkingId = this.props.user.checking.id
        console.log(amount, checkingId)
    if (amount <= 0) {
        swal('','Please enter a valid amount', 'error')
    }
      else if (this.props.user.checking.balance <= 0){
        swal('','insufficient funds', 'error') }
      else if (amount > this.props.user.checking.balance) {
        swal('','insufficient funds', 'error')
      }
      else {
        swal(``,
        "Withdrawal Made",
        "success");
      e.target.amount.value = ''
          fetch(`https://flatironbankapi.herokuapp.com/checkings/withdrawal/${checkingId}`, {
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
            // console.log('here')
            // Has to be called with this.props *** 
            this.props.onlineWithdrawal(updatedUserObj)
          })
          // this.props.history.push(`/account/${this.props.user.id}`)
          // this.props.history.goBack()
      }}

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    renderEnglish = () => {
            return             <>
            <Button color='black' onClick={this.handleShow} >Withdrawal</Button>
            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Withdrawal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form onSubmit = {this.handleWithdrawal} >
                      <p>Available balance: ${this.props.user.checking.balance} </p>
                      <label htmlFor="">Withdrawal Amount</label>
                      <input type="number" name = 'amount' />
                      <br/>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type = 'submit' >
                  Submit
                </Button>
              </Modal.Footer>
              </form>
              </Modal.Body>
            </Modal>
          </>
    }
    
    renderChinese = () => {
        return             <>
        <Button color='black' onClick={this.handleShow} >取款交易</Button>
        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>取款交易</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit = {this.handleWithdrawal} >
                  <p>当前账号余额 ${this.props.user.checking.balance} </p>
                  <label htmlFor="">取钱的金额</label>
                  <input type="number" name = 'amount' />
                  <br/>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              关闭
            </Button>
            <Button variant="primary" type = 'submit'>
              提交
            </Button>
          </Modal.Footer>
          </form>
          </Modal.Body>
        </Modal>
      </>
}

    render() {
        return (
            
            <>
                {this.props?.language === 'Chinese' ? this.renderChinese() : this.renderEnglish()}
            </>
          )
    }
}

const mstp = (appState) => {
    // console.log(appState)
    return appState
  }

export default connect(mstp, {onlineWithdrawal})(WithdrawalModal)
