import React, { Component } from 'react'
import Newscard from './Newscard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveNewsToStore} from '../Redux/actions'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import uuid from 'react-uuid'

export class Newsgrid extends Component {

    // This method returns the div, not the array of map method 
    renderChinese = () => {
        // Mapping the newsArray, which is presented in Redux store, and redner each news card. 

        // ** This is what's being return by the map method. 
        let newsMapper = this.props?.newsArray?.map(singleArticle => {
                return <MDBCol md ='4'><Newscard singleNews = {singleArticle} key = {uuid()}/></MDBCol>}
        )

                // This is what's being returned to renderChinese 
                return  <div>
                            <MDBContainer>
                                <h1 className = 'news-title'>现况头条新闻</h1>
                            <MDBRow>
                                {newsMapper}
                            </MDBRow>
                            </MDBContainer>                
                        </div>
    }

    renderEnglish =() => {
        
            // Slice, to get the first 8
            let newArray = this.props?.newsArray?.slice(0,8)
            let newsMapper = newArray?.map(singleArticle => {
            return <MDBCol md ='3'><Newscard singleNews = {singleArticle} key = {uuid()}/></MDBCol>
        })   
            // This is what's being returned to renderEnglish 
            return  <div>
                        <MDBContainer>
                            <h1 className = 'news-title'>Trending News</h1>
                        <MDBRow>
                            {newsMapper}
                        </MDBRow>
                        </MDBContainer>                
                    </div>        
    }

    render() {
        const languageTernry = this.props.language==='Chinese'? this.renderChinese(): this.renderEnglish()
        
        return (
            <>
                {languageTernry}
            </>
        )
    }
}

const mstp = (appState) => {
    return {newsArray: appState.newsArray,
            language: appState.languagerof}
}

export default connect(mstp)(Newsgrid)
