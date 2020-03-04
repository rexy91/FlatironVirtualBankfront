import React, { Component } from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import {saveAllUsersToStore} from '../Redux/actions'
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

    render() {
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
              {/* <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'
              /> */}
              <h4>Your Email</h4>
              <p>{this.props?.appState?.user?.email}</p>
              <br/>
              <label> Transfer Amount:</label>
              <br/>
              <input type="number"/>
              {/* <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              /> */}
              <label htmlFor="">Transfer To</label>
              <select name="" id="">
                    <option value="">{this.props?.appState?.user?.first_name}</option>
              </select>
              <div className='md-form pb-3'>
                <MDBInput
                //   label={
                //     <>
                //       Accept the&nbsp;
                //       <a href='#!' className='green-text font-weight-bold'>
                //         Terms and Conditions
                //       </a>
                //     </>
                //   }
                //   type='checkbox'
                //   id='checkbox1'
                //   labelClass='white-text'
                />
              </div>
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='black'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Transfer
                  </MDBBtn>
                </div>
              </MDBRow>
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
                
            </div>
        )
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp, {saveAllUsersToStore})(InstantTransfer)