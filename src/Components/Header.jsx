import React from 'react';
import { MDBContainer, MDBNavbar, MDBCol, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBRow } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogout} from './Redux/actions'
import logo from '../image/mylogo.jpg'
import anotherLogo from '../image/anotherlogo.jpg'
import {toggleLanguageState} from './Redux/actions' 
import swal from 'sweetalert';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }
  
  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }
  
  toggleLanguage =(e) => {
      // if (e.target.innerText ==='中文'){
      // const language = 'Chinese'
      this.props.toggleLanguageState('Chinese')
  }

  toggleNonChinese = (e) => {
    this.props.toggleLanguageState('')
  }
  handleLogout = (e) => {
      e.preventDefault()
      localStorage.clear()
      this.props.history.push('/')
      this.props.handleLogout()

  }

  renderEnglishProfile = () => {

    if(localStorage.length !== 0){
          {return <MDBNavItem active>
                  <MDBNavLink onClick = {this.handleProfilePage} to="/">Profile Page</MDBNavLink>
                 </MDBNavItem>}
    }
    else{
        // console.log('there')
    }
    }
    renderChineseProfile = () => {
      if(localStorage.length !== 0){
        {return <MDBNavItem active>
                <MDBNavLink onClick = {this.handleProfilePage} to="/">个人主页</MDBNavLink>
               </MDBNavItem>}
  }
  else{
      // console.log('there')
  }
    }

    handleLoans =(e) => {
   e.preventDefault()
      swal('Feature coming soon')
    }

  handleProfilePage = (e) => {
      e.preventDefault()
      this.props.history.push(`/account/${this.props?.appState?.user?.id}`)
  }

  renderEnglishLogout = () => {
    // if(localStorage!== 0){
    //     if(this.props.lanuage === 'Chinese'){
    //       return <MDBNavItem active>
    //               <MDBNavLink onClick = {this.handleLogout} to="/">登出</MDBNavLink>
    //              </MDBNavItem>}
    //     else{
    //       console.log('here')
    //       return <MDBNavItem active>
    //               <MDBNavLink onClick = {this.handleLogout} to="/">Log Out</MDBNavLink>
    //              </MDBNavItem>}
    //     }

    if(localStorage.length !== 0){
          {return <MDBNavItem active>
                  <MDBNavLink onClick = {this.handleLogout} to="/">Log Out</MDBNavLink>
                 </MDBNavItem>}
    }
    else{
        // console.log('there')
    }
    }
    renderChineseLogout = () => {
      if(localStorage.length !== 0){
            {return <MDBNavItem active>
                    <MDBNavLink onClick = {this.handleLogout} to="/">登出</MDBNavLink>
                   </MDBNavItem>}
      }
      else{
          // console.log('there')
      }
      }

  renderChinese = () => {
      const bgPink = {backgroundColor: 'black'}
      const container = {height: 100}
      const imgSize = {height: '100px', width:'100px'}
    return <div id = 'header'>
            <header>
              <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand href="/">
                    <strong>Flatiron</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink exact to="/">主页</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                        <MDBNavLink exact to="/">贷款</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink onClick = {this.toggleLanguage} to="#">中文</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink onClick = {this.toggleNonChinese}to="#">English</MDBNavLink>
                    </MDBNavItem>
                    {this.props.appState.language==='Chinese'? this.renderChineseProfile():this.renderEnglishProfile()}
                    {this.props.appState.language==='Chinese'? this.renderChineseLogout():this.renderEnglishLogout()}
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
        </header>

        {/* <MDBContainer style={container} className="text-center mt-5 pt-5" >
          <img id = 'logo' style = {imgSize} src={logo} alt=""/>
          <h2 id='title'>欢迎使用虚拟银行系统</h2>
          <img id = 'secondlogo' style ={imgSize} src={anotherLogo} alt ='' /> 
        </MDBContainer> */}
      </div>
  }

  renderEnglish = () => {
    const bgPink = {backgroundColor: 'black'}
    const container = {height: 100}
    const imgSize = {height: '100px', width:'100px'}
        return <div id = 'header'>
                <header>
                  <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                    <MDBNavbarBrand href="/">
                        <strong>Flatiron</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={ this.onClick } />
                    <MDBCollapse isOpen = { this.state.collapse } navbar>
                      <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink exact to="/">Flatiron</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active>
                        <MDBNavLink exact onClick ={this.handleLoans} to="/">Loans</MDBNavLink>
                    </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink onClick = {this.toggleLanguage} to="#">Chinese</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink onClick = {this.toggleNonChinese} to="#">English</MDBNavLink>
                        </MDBNavItem>
                        {this.props.appState.language==='Chinese'? this.renderChineseProfile():this.renderEnglishProfile()}
                        {this.props.appState.language==='Chinese'? this.renderChineseLogout():this.renderEnglishLogout()}
                      </MDBNavbarNav>
                      <MDBNavbarNav right>
                        <MDBNavItem>
                          <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                        </MDBNavItem>
                      </MDBNavbarNav>
                    </MDBCollapse>
                  </MDBNavbar>
                </header>

                    {/* <MDBContainer style={container} className="text-center mt-5 pt-5" >
                    <MDBRow>
                      <MDBCol md='3'>
                      <img id = 'logo' style = {imgSize} src={logo} alt=""/>
                      </MDBCol>
                      <MDBCol md='9'>
                      <h2 id='title'>Welcome to the #### Banking System</h2>
                      </MDBCol>
                    </MDBRow>
                      <img id = 'secondlogo' style ={imgSize} src={anotherLogo} alt ='' /> 
                    </MDBContainer> */}
                  </div>
  }

  render() {
    // console.log(this.props)
    const languageTernry = this.props.appState.language==='Chinese'? this.renderChinese(): this.renderEnglish()
    return(
      <>
        {languageTernry}
      </>
    );
  }
}

const mstp = (appState) => {
  // console.log(appState)
  return {appState}
}

export default withRouter(connect(mstp, {handleLogout, toggleLanguageState})(FixedNavbarExample))