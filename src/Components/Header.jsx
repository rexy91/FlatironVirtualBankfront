import React from 'react';
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
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

    if(localStorage.length !== 0){
          {return <MDBNavItem active>
                  <MDBNavLink onClick = {this.handleLogout} to="/">Log Out</MDBNavLink>
                 </MDBNavItem>}
    }
    else{
        
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
                        {/* <MDBNavLink onClick ={this.handleLoans} exact to="/">贷款</MDBNavLink> */}
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

                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
        </header>

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
                            <MDBNavLink exact to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active>
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
                      </MDBNavbarNav>
                    </MDBCollapse>
                  </MDBNavbar>
                </header>

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