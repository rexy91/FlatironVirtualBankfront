import React, { Component } from 'react'
import {connect} from 'react-redux'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export class Footer extends Component {


    emailSupport = () => {
        const userId = this.props?.appState?.user?.id
        console.log(userId)
        let message = 'This website can be improved, I have a hard time on user interface. '
        fetch('http://localhost:3000/customer_support/complaint', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(
            {
                message,
                userId:this.props.appState.user.id 
            }
          )
        })
          .then(r => r.json())
          .then(responseFromServer => {
              
              // console.log(responseFromServer)
              
          }) } 
    renderChinese = () => {
      return (
        <MDBFooter id ='mainFooter' color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">谢谢你使用我们的网站! 💎💛💓</h5>
              <p>
                  史蒂夫绝对是见风使舵见风使舵距福建省地方就绝对是放假的时间风刀霜剑飞机上的风景大煞风景
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
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
              </ul>
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
        <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Thank you for visiting our site! 💎💛💓</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a onClick = {this.emailSupport}href="#!">Email Us</a>
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
              </ul>
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



