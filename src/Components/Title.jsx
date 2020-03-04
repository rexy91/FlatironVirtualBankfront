import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import logo from '../image/mylogo.jpg'

export class Title extends Component {
    render() {
        return (
            <div>
                <MDBContainer  className="text-center mt-5 pt-5" >
                    <MDBRow>
                      <MDBCol md='3'>
                      <img id = 'logo'  alt=""/>
                      </MDBCol>
                      <MDBCol md='9'>
                      <h2 id='title'>Welcome to the #### Banking System</h2>
                      </MDBCol>
                    </MDBRow>
                      <img id = 'secondlogo'  alt ='' /> 
                    </MDBContainer>
            </div>
        )
    }
}

export default Title
