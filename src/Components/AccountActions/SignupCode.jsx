import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
import swal from 'sweetalert';
import {withRouter} from 'react-router-dom'
export class ModalDeposit extends Component {
        
  render() {

    return (
        <Modal trigger={<Button color='black'>进行存款</Button>} centered={false}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Please Enter the signup code: </Header>
            
            <p></p>
            <form >
              <label htmlFor="">存款的金额</label>
              <input type="number" name = 'amount' />
              <br/>
              <button type ='submit'> 提交 </button>
            </form>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
      )
}
}

    const mstp = (appState) => {

      return appState
    }


export default connect(mstp)(withRouter(ModalDeposit))
