import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux'
export class Modalupdate extends Component {

    updateInfo = (e) => {
        e.preventDefault()
        const first_name = e.target.first_name.value
        const last_name = e.target.last_name.value
        const email = e.target.email.value
        const billing_address = e.target.billing_address.value

        fetch(`http://localhost:3000/account/${this.props.appState.user.id}/profile/update`, {
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
        .then (console.log)

    }
    render() {
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
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          )
    }
}

const mstp = (appState) => {
    return {appState}
}

export default connect(mstp)(Modalupdate)
