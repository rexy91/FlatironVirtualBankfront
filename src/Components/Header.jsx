import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogout} from './Redux/actions'
import logo from '../image/mylogo.jpg'
import anotherLogo from '../image/anotherlogo.jpg'
import {toggleLanguageState} from './Redux/actions' 

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
      this.props.toggleLanguageState(e.target.innerText)

  }

  handleLogout = (e) => {
      e.preventDefault()
      localStorage.clear()
      this.props.history.push('/')
      this.props.handleLogout()

  }

  renderLogout = () => {
    if(localStorage.getItem){
        if(this.props.lanuage === 'Chinese'){
          console.log('fsdfsd')
          return <MDBNavItem active>
                  <MDBNavLink onClick = {this.handleLogout} to="/">登出</MDBNavLink>
                 </MDBNavItem>}

        else{
          console.log('here')
          return <MDBNavItem active>
                  <MDBNavLink onClick = {this.handleLogout} to="/">Log Out</MDBNavLink>
                 </MDBNavItem>}
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
                    <strong>### Virtual</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink exact to="/">主页</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink onClick = {this.toggleLanguage} to="#">中文</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#">英文</MDBNavLink>
                    </MDBNavItem>
                    {this.renderLogout()}
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

        <MDBContainer style={container} className="text-center mt-5 pt-5" >
          <img id = 'logo' style = {imgSize} src={logo} alt=""/>
          <h2 id='title'>欢迎使用 #### Banking System</h2>
          <img id = '2ndlogo' style ={imgSize} src={anotherLogo} alt ='' /> 
        </MDBContainer>
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
                        <strong>### Virtual</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={ this.onClick } />
                    <MDBCollapse isOpen = { this.state.collapse } navbar>
                      <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink exact to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink onClick = {this.toggleLanguage} to="#">Chinese</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                          <MDBNavLink to="#">English</MDBNavLink>
                        </MDBNavItem>
                        {this.renderLogout()}
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

                    <MDBContainer style={container} className="text-center mt-5 pt-5" >
                      <img id = 'logo' style = {imgSize} src={logo} alt=""/>
                      <h2 id='title'>Welcome to the #### Banking System</h2>
                      <img id = '2ndlogo' style ={imgSize} src={anotherLogo} alt ='' /> 
                    </MDBContainer>
                  </div>
  }

  render() {
    console.log(this.props)
    const languageTernry = this.props.language==='Chinese'? this.renderChinese(): this.renderEnglish()
    return(
      <>
        {languageTernry}
      </>
    );
  }
}

const mstp = (appState) => {
  // console.log(appState)
  return {language: appState.language}
}

export default withRouter(connect(mstp, {handleLogout, toggleLanguageState})(FixedNavbarExample))