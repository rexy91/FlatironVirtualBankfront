import React, { Component } from 'react'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {connect} from 'react-redux'
import {dynamicSearch} from '../Redux/actions'

export class DynamicSearch extends Component {

    handleChange = (e) => {
        this.props.dynamicSearch(e.target.value)
    }
    
    render() {
        // console.log(this.props)
        return (
        <div>
            <MDBCol md="12">
            <MDBFormInline className="md-form mr-auto mb-4">
                <input onChange = {this.handleChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                Search
                </MDBBtn>
            </MDBFormInline>
            </MDBCol>                
        </div>
        )
    }
}

const mstp = (appState) => {
    // App state is the whole state.
    return {searchtermObj:appState}
}

export default connect(mstp, {dynamicSearch})(DynamicSearch)
