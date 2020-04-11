import React, { Component } from 'react'
import {connect} from 'react-redux'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export class Footer extends Component {


    handleEmail =() => {
      
    }
    renderChinese = () => {
      return (
        <MDBFooter id ='mainFooter' color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">谢谢你使用我们的网站! 💎💛💓</h5>
              {/* <p>
                  史蒂夫绝对是见风使舵见风使舵距福建省地方就绝对是放假的时间风刀霜剑飞机上的风景大煞风景
              </p> */}
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <li className="list-unstyled">
                  {/* <a onClick = {this.emailSupport}href="#!">联系我们</a> */}
                </li>
              {/* <ul>
                <li className="list-unstyled">
                  <a onClick = {this.emailSupport}href="#!">联系我们</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
    }

    renderEnglish = () => {

      return (
        <MDBFooter id ='mainFooter' color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h4 className="title">Thank you for visiting our site! 💎💛💓</h4>
              <h5 onClick = {this.handleEmail} style={{cursor:"pointer"}}>Email Us</h5>
            </MDBCol>
            <MDBCol md="6">

            <li className="list-unstyled">
                  {/* <a onClick = {this.emailSupport}href="#!">Email Us</a> */}
                </li>
              {/* <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
    }

    render() {
      const languageTernry = this.props.appState.language==='Chinese'? this.renderChinese(): this.renderEnglish()
      return(
            <>
              {languageTernry}
            </>
      )
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp)(Footer)



