import React, { Component } from 'react'
import {connect} from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import {saveAllUsersToStore} from '../Redux/actions'
import {updateSendinguserBalance} from '../Redux/actions'
import {updateInternalTransfer} from'../Redux/actions'
import Footer from '../Footer'
import swal from 'sweetalert';
import Newscard from '../Newscard'
import News from '../Newscontainer'
export class InstantTransfer extends Component {

    componentDidMount(){
        fetch('https://flatironbankapi.herokuapp.com/users')
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
      if(amount <= 0){
        swal(``,
        "Invalid Transfer Amount",
        "error");
      }
      else if(amount > this.props?.appState?.user?.checking?.balance){
        swal(``,
        "You don't have enough funds",
        "error");
      }
      else{
        fetch(`https://flatironbankapi.herokuapp.com/checkings/${this.props?.appState?.user?.id}/instant_transfer`, {
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
          console.log(updatedUser)
          swal(``,
          "Transfer was made successfully",
          "success");
            this.props.updateSendinguserBalance(updatedUser)
        })
    }}

    renderEnglish =() => {
      const currentId = this.props?.appState?.user?.id 
      // console.log(this.props?.appState?.users)
      const filterOutCurrentUserDropdown = this.props?.appState?.users?.filter(user=> (currentId !== user.id))
      
      const mapAllUsers = filterOutCurrentUserDropdown?.map(user => {
        return <option value={`${user.id}`}>{user.username} , {user.email} </option>
  })
  return (
      <div id='instant-transfer'>        
<MDBContainer>
<MDBRow>
  <MDBCol md='6'>
    <MDBCard
      className='card-image'
      style={{
        backgroundImage:
          'url(https://homelandprepnews.com/wp-content/uploads/2018/10/shutterstock_1105484522.jpg)',
        width: '100%',
        marginTop:'10vh',
        marginBottom:'-5vh'
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
        <br/>
        <select name="transfer_to" id="">
              {mapAllUsers}
        </select>
        <br/>
        <br/>
        <MDBBtn
              type ='submit'
              color='white'
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
      </div>
  )
    }


    renderChinese = () => {
      const mapAllUsers = this.props?.appState?.users?.map(user => {
        return <option value={`${user.id}`}>{user.username} , {user.email} </option>
  })
  return (
      <div id='instant-transfer'>
          
<MDBContainer>
<MDBRow>
  <MDBCol md='6'>
    <MDBCard
      className='card-image'
      style={{
        backgroundImage:
          'url(https://homelandprepnews.com/wp-content/uploads/2018/10/shutterstock_1105484522.jpg)',
        width: '100%',
        marginTop:'10vh',
        marginBottom:'-5vh'
      }}
    >
      <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
        <div className='text-center'>
          <h3 className='white-text mb-5 mt-4 font-weight-bold'>
          <a href='#!' className='white-text font-weight-bold'>
            <strong>虚拟转账</strong>
              <strong> 系统</strong>
            </a>
          </h3>
        </div>
        <h4>您的邮箱</h4>
        <p>{this.props?.appState?.user?.email}</p>
        <p>可转账余额: ${this.props?.appState?.user?.checking?.balance}</p>
        <form onSubmit = {this.toggleTransfer}>
        <label> 转账金额:</label>
        <br/>
        <input name ='instant_transfer_amount' type="number"/>
        <br/>
        <label htmlFor="">转到的账户</label>
        <br/>
        <select name="transfer_to" id="">
              {mapAllUsers}
        </select>
        <br/>
        <br/>
        <MDBBtn
              type ='submit'
              color='white'
              rounded
              className='btn-block z-depth-1'
            >
              转账
            </MDBBtn>
        </form>
        <div className='md-form pb-3'>
        </div>

        <MDBCol md='12'>
          <p className='font-small white-text d-flex justify-content-end'>
            谢谢你使用
            <a href='#!' className='green-text ml-1 font-weight-bold'>
              虚拟银行
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

    render() {
        // console.log(this.props)
          const languageTernery = this.props?.appState?.language ==='Chinese'? this.renderChinese(): this.renderEnglish()
      return(
      <>
        {languageTernery}
        <Footer/>
      </>
      )
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp, {saveAllUsersToStore, updateInternalTransfer, updateSendinguserBalance})(InstantTransfer)