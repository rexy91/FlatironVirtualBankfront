import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Newscard from './Newscard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveNewsToStore} from './Redux/actions'
import uuid from 'react-uuid'

export class Newsgrid extends Component {
    render() {
        let newsMapper = this.props?.newsArray?.map(singleArticle => {
            
            return <MDBCol md ='4'><Newscard singleNews = {singleArticle} key = {uuid()}/></MDBCol>
        })
        return (
            <div>
                <MDBContainer>
                    <h1>Trending News</h1>
                <MDBRow>
                    {newsMapper}
                </MDBRow>
                </MDBContainer>                
            </div>
        )
    }
}

const mstp = (appState) => {
    return {newsArray: appState.newsArray}
}

export default connect(mstp)(Newsgrid)
