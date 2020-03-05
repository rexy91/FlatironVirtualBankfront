import React, { Component } from 'react'
import Newscard from './Newscard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveNewsToStore} from './Redux/actions'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import uuid from 'react-uuid'

export class Newsgrid extends Component {
    
    renderChinese = () => {
    
        let newsMapper = this.props?.newsArray?.map(singleArticle => {
            for(let i=0; i<6; i++){
                return <MDBCol md ='4'><Newscard singleNews = {singleArticle} key = {uuid()}/></MDBCol>}
        })       

    return  <div>
                <MDBContainer>
                    <h1 style={{color:'white'}}>现况头条新闻</h1>
                <MDBRow>
                    {newsMapper}
                </MDBRow>
                </MDBContainer>                
            </div>
    }

    renderEnglish =() => {
        let oldArray = this.props.newsArray
        let newArray = this.props?.newsArray?.slice(0,6)

        // console.log(newArray)

        let newsMapper = newArray?.map(singleArticle => {
            
                return <MDBCol md ='4'><Newscard singleNews = {singleArticle} key = {uuid()}/></MDBCol>
        })   

    return  <div>
                <MDBContainer>
                    <h1 style={{color:'white'}}>Trending News</h1>
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
