import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updateUserInfo} from './Redux/actions'
export class Modalupdate extends Component {

    updateInfo = (e) => {
        e.preventDefault()
        const first_name = e.target.first_name.value
        const last_name = e.target.last_name.value
        const email = e.target.email.value
        const billing_address = e.target.billing_address.value

        fetch(`http://localhost:3000/account/${this.props?.appState?.user.id}/profile/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body:JSON.stringify({
                first_name,
                last_name,
                email,
                billing_address
            })
        })
        .then (res => res.json())
        .then (updatedUserObj => {
            this.props.updateUserInfo(updatedUserObj)
        })
    }

    renderEnglish =() => {
        return (
            <Modal trigger={<Button color='black'>Update Info</Button>} centered={false}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>Update Info</Header>
                {/* <p>Available balance: </p> */}
                <form onSubmit = {this.updateInfo}>
                  <label htmlFor="">First Name:</label>
                  <input type="text" name = 'first_name' />
                  <br/>
                  <label htmlFor="">Last Name:</label>
                  <input type="text" name = 'last_name' />
                  <br/>
                  <label htmlFor="">Email:</label>
                  <input type="text" name = 'email' />
                  <br/>
                  <label htmlFor="">Billing Address:</label>
                  <textarea type="text" name = 'billing_address' />
                  <input type="submit"/>
                </form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          )
    }

    renderChinese =() => {
        return (
            <Modal trigger={<Button color='black'>更新资料</Button>} centered={false}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Modal.Description>
                <Header>跟信你的资料</Header>
                {/* <p>Available balance: </p> */}
                <form onSubmit = {this.updateInfo}>
                  <label htmlFor="">名字:</label>
                  <input type="text" name = 'first_name' />
                  <br/>
                  <label htmlFor="">姓氏:</label>
                  <input type="text" name = 'last_name' />
                  <br/>
                  <label htmlFor="">电子邮箱:</label>
                  <input type="text" name = 'email' />
                  <br/>
                  <label htmlFor="">信箱地址:</label>
                  <textarea type="text" name = 'billing_address' />
                  <button type ='submit'> 提交 </button>
                </form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          )
    }
    
    render() {
        const languageTernery = this.props?.appState?.language? this.renderChinese(): this.renderEnglish()
        return (
            <>
                {languageTernery}
            </>
          )
    }
}

const mstp = (appState) => {
    return {appState}
}

export default connect(mstp, {updateUserInfo})(Modalupdate)
