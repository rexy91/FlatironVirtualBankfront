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
              <h5 className="title">谢谢你使用我们的网站! <span>💎💛💓</span></h5>

            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <li className="list-unstyled">
                  
                </li>

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
              <h4 className="title">Thank you for visiting our site! 💎💛💓</h4>

            <li className="list-unstyled">
                </li>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
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



