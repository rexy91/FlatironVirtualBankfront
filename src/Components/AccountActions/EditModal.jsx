import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updateUserInfo} from '../Redux/actions'

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
  
    
    submitUpdate = (e) => {
        e.preventDefault()
        console.log(this.props.user.id)
        const first_name = e.target.first_name.value
        const last_name = e.target.last_name.value
        const billing_address = e.target.billing_address.value
        const email = e.target.email.value

        fetch(`https://flatironbankapi.herokuapp.com/account/${this.props?.user?.id}/profile/update`,{
          method:'PATCH',
          headers:{
            Accept:'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
              first_name,
              last_name,
              billing_address,
              email
          })
        })
        .then(res => res.json())
        .then(newInfoObj => {
          // this.props.updateUserInfo(newInfoObj)
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
                  <form onSubmit = {this.submitUpdate}>
                      <label htmlFor="">First Name</label>
                      <input type="text" name = 'first_name' size="10"
                             value={this.props?.user?.first_name}
                      />
                      <label style={{marginLeft:'10px'}} htmlFor="">Last Name</label>
                      <input type="text" name = 'last_name' size="10"
                             value={this.props?.user?.last_name}
                      />
                      <br/>
                      <label htmlFor="">Address</label>
                      <input type="text" name = 'billing_address' size="45"
                             value={this.props?.user?.billing_address}
                      />
                      <br/>
                      <label style={{marginLeft:'5px', marginTop:'5px'}} htmlFor="">Email</label>
                      <input style={{marginLeft:'13px', marginTop:'5px'}} type="text" name = 'email' size="28"
                             value={this.props?.user?.email} 
                      />
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
        console.log(this.props)
        return (
            <>
                {this.props?.language === 'Chinese' ? this.renderChinese() : this.renderEnglish()}
            </>
          )
    }
  }



export default connect(null, {updateUserInfo})(EditModal)
