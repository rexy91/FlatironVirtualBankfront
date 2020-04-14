import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onlineCheckingDeposit} from '../Redux/actions'
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom'
export class ModalDeposit extends Component {

  renderEnglish = () => {
    return (
      <Modal trigger={<Button color='black'>Deposit</Button>} centered={false}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Make a deposit</Header>
          <p>Available balance: ${this.props.user.checking.balance} </p>
          <form onSubmit = {this.submitDeposit}>
            <label htmlFor="">Deposit Amount</label>
            <input type="number" name = 'amount' />
            <br/>
            <input type="submit"/>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    )
  }

  renderChinese = () => {
    return (
      <Modal trigger={<Button color='black'>进行存款</Button>} centered={false}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>存款交易</Header>
          <p>当前账户余额: ${this.props.user.checking.balance} </p>
          <form onSubmit = {this.submitDeposit}>
            <label htmlFor="">存款的金额</label>
            <input type="number" name = 'amount' />
            <br/>
            <button type ='submit'> 提交 </button>
          </form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    )
  }
      
  render() {
    const languageTernry = this.props?.language==='Chinese'? this.renderChinese(): this.renderEnglish()
return(
    <>
      {languageTernry}
    </>)
}
}

    const mstp = (appState) => {

      return appState
    }


export default connect(mstp, {onlineCheckingDeposit})(withRouter(ModalDeposit))
