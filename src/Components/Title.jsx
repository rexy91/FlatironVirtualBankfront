import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import logo from '../image/mylogo.jpg'
import {connect} from 'react-redux'

export class Title extends Component {

    renderChinese = () => {
      return (
        <div>
            <MDBContainer  className="text-center mt-5 pt-5" >
                <MDBRow>
                  <MDBCol md='3'>
                  <img id = 'logo'  alt=""/>
                  </MDBCol>
                  <MDBCol md='9'>
                  <h2 id='title'>欢迎你使用我们的虚拟银行系统</h2>
                  </MDBCol>
                </MDBRow>
                </MDBContainer>
        </div>
    )
    }

    renderEnglish= () => {
      return (
        <div>
            <MDBContainer  className="text-center mt-5 pt-5" >
                <MDBRow>
                  <MDBCol md='3'>
                  <img id = 'logo'  alt=""/>
                  </MDBCol>
                  <MDBCol md='9'>
                  <h2 id='title'>Flatiron Virtual Bank</h2>
                  </MDBCol>
                </MDBRow>
                </MDBContainer>
        </div>
    )
    }
    render() {

      const languageTernry = this.props.language==='Chinese'? this.renderChinese(): this.renderEnglish()
      return(
        <>
          
            {languageTernry}
        </>
      )
    }
}

const mstp = (appState) => {
  // console.log(appState)
  return appState
}

export default connect (mstp)(Title)
