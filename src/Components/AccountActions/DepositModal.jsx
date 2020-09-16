import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import { Button, Header, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onlineCheckingDeposit} from '../Redux/actions'
import swal from 'sweetalert'

export class WithdrawalModal extends Component {

    state = {
        show:false
    }
    submitDeposit = (e) => {
        e.preventDefault()
        const amount = e.target.amount.value
        // console.log(this.props.user.checking.id)
        const checkingId = this.props.user.checking.id
        // Multiple of 20  , minium deposit is 20 
    if(amount < 20){
        swal('Please make a minimum deposit of $20')
    }
    else if (amount > 5000){
        swal(
          'Alert!!',
          'Deposit Amount is too large, please visit one of our five thousands branches.',
          'error')
    }

    else{
      swal(``,
      "Deposit Made",
      "success");
      e.target.amount.value = ''
        fetch(`https://flatironbankapi.herokuapp.com/checkings/deposit/${checkingId}`, {
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
            this.props.onlineCheckingDeposit(updatedUserObj)
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
            <Button color='black' onClick={this.handleShow} >Deposit</Button>
            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Deposit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form onSubmit = {this.submitDeposit} >
                      <p>Account balance: ${this.props.user.checking.balance} </p>
                      <label htmlFor="">Deposit Amount</label>
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
        <Button color='black' onClick={this.handleShow} >存款交易</Button>
        <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>存款交易</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form onSubmit = {this.submitDeposit} >
                  <p>当前账号余额 ${this.props.user.checking.balance} </p>
                  <label htmlFor="">存钱的金额</label>
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
    return appState
  }

export default connect(mstp, {onlineCheckingDeposit})(WithdrawalModal)
