import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogout} from './Redux/actions'
import logo from '../image/mylogo.jpg'

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

  handleLogout = (e) => {
      e.preventDefault()
      localStorage.clear()
      this.props.history.push('/')
      this.props.handleLogout()

  }

  renderLogout = () => {
    if(localStorage.getItem){
     return <MDBNavItem active>
          <MDBNavLink onClick = {this.handleLogout} to="/">Log Out</MDBNavLink>
      </MDBNavItem>
    }
  }

  render() {
    // console.log(this.props)
    const bgPink = {backgroundColor: 'black'}
    const container = {height: 100}
    const imgSize = {height: '100px', width:'100px'}
    return(
      <div id = 'header'>
 
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
                      <MDBNavLink to="#">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBNavLink to="#">Pricing</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Options</MDBNavLink>
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
        </MDBContainer>
      </div>
    );
  }
}

export default withRouter(connect(null, {handleLogout})(FixedNavbarExample))