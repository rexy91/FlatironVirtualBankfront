import React, { Component } from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import {saveAllUsersToStore} from '../Redux/actions'
import {updateSendinguserBalance} from '../Redux/actions'

import Newscard from '../Newscard'
import News from '../Newscontainer'
export class InstantTransfer extends Component {



    //Fetch to get all users, save that to the store.
    //Strech goal: Filter out the current user, can't transfer to yourself. 

    componentDidMount(){
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(allUsers => {
            this.props.saveAllUsersToStore(allUsers)
        })
    }

    toggleTransfer =(e) => {
      e.preventDefault()
      const amount = e.target.instant_transfer_amount.value
      const id_from = this.props?.appState?.user?.id
      //Value from the drop down is the id of the receiving user. 
      const id_to = e.target.transfer_to.value
      
        fetch(`http://localhost:3000/checkings/${this.props?.appState?.user?.id}/instant_transfer`, {
          method:'PATCH',
          headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body:JSON.stringify({
                amount,
                id_from,
                id_to
          })
        })
        // Get back the current user, that s all we need to update for the DOM, the checking balance after transfering out.
        .then(res => res.json())
        .then(updatedUser => {
            this.props.updateSendinguserBalance(updatedUser)
        })
    }

    render() {
        const mapAllUsers = this.props?.appState?.users?.map(user => {
              return <option value={`${user.id}`}>{user.username} , {user.email} </option>
        })
        return (
            <div id='instant-transfer'>
                <h2 id='instant-transfer-header'  >Transfer your funds in seconds</h2>
 <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://homelandprepnews.com/wp-content/uploads/2018/10/shutterstock_1105484522.jpg)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                <a href='#!' className='white-text font-weight-bold'>
                  <strong>Virtual Instant</strong>
                    <strong> Transfer</strong>
                  </a>
                </h3>
              </div>
              <h4>Your Email</h4>
              <p>{this.props?.appState?.user?.email}</p>
              <p>Checking Acc Balance: ${this.props?.appState?.user?.checking?.balance}</p>
              <form onSubmit = {this.toggleTransfer}>
              <label> Transfer Amount:</label>
              <br/>
              <input name ='instant_transfer_amount' type="number"/>
              <br/>
              <label htmlFor="">Transfer To</label>
              <select name="transfer_to" id="">
                    {mapAllUsers}
              </select>
              <br/>
              <br/>
              <MDBBtn
                    type ='submit'
                    color='black'
                    rounded
                    className='btn-block z-depth-1'
                  >
                    Transfer
                  </MDBBtn>
              </form>
              <div className='md-form pb-3'>
              </div>

              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Thank You for Using
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                    Virtual Bank
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
              <News/>
            </div>
        )
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp, {saveAllUsersToStore, updateSendinguserBalance})(InstantTransfer)