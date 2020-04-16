import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import { Button, Header, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {onlineCheckingDeposit} from '../Redux/actions'
import swal from 'sweetalert'

export class EditModal extends Component {

    state = {
        show:false
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = (e) => {
        e.preventDefault()
        this.setState({
            show: true
        })
    }

    renderEnglish = () => {
            return             <>
            <a href="" target="" onClick = {this.handleShow}style={{marginLeft:'20%'}}>Edit Info</a>
            <Modal style={{marginTop:'17vh'}} show={this.state.show} onHide={this.handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Update Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form onSubmit = {this.submitDeposit} >
                      {/* <p>Account balance: ${this.props.user.checking.balance} </p> */}
                      <label htmlFor="">First Name</label>
                      <input type="text" name = 'first_name' size="10"/>
                      <label style={{marginLeft:'10px'}} htmlFor="">Last Name</label>
                      <input type="text" name = 'last_name' size="10"/>
                      <br/>
                      <label htmlFor="">Address</label>
                      <input type="text" name = 'address' size="40"/>
                      <label style={{marginLeft:'5px', marginTop:'5px'}} htmlFor="">Apt
                             
                      </label>
                      <input style={{marginLeft:'5px', marginTop:'5px'}} type="text" name = 'apt' size="10"/>
                      <label style={{marginLeft:'5px', marginTop:'5px'}} htmlFor="">City</label>
                      <input style={{marginLeft:'21px', marginTop:'5px'}} type="text" name = 'city' size="10"/>
                      <label style={{marginLeft:'5px', marginTop:'5px'}} htmlFor="">Zip</label>
                      <input style={{marginLeft:'21px', marginTop:'5px'}} type="number" name = 'zip' size="1"/>
                      <br/>
                      <label style={{marginLeft:'5px', marginTop:'5px'}} htmlFor=""
                             
                      >Email</label>
                      <input style={{marginLeft:'13px', marginTop:'5px'}} type="text" name = 'email' size="25"/>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" type = 'submit' >
                  Update
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
                  {/* <p>当前账号余额 ${this.props.user.checking.balance} </p> */}
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
      console.log(this.props?.language)
        return (
            <>
                {this.props?.language === 'Chinese' ? this.renderChinese() : this.renderEnglish()}
            </>
          )
    }
  }

  const mstp = (appState) => {
    console.log(appState)
    return {appState}
}

export default connect(mstp)(EditModal)
