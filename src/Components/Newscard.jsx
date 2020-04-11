import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
export class Newscard extends Component {

    newsUrl = () => {
        this.props.history.push(this.props.singleNews.url)
        // console.log(this.props)
    }
    openTab = () => {
        window.open(`${this.props.singleNews.url}`);
      }
      
    render() {
        // console.log(this.props.singleNews)
        const {title, urlToImage,url} = this.props.singleNews
        // console.log(title, urlToImage,url)
        // const imgStyle = {height:'260px', width:'320px'}
        const languageTerary = this.props.appState.language ==='Chinese'? '观看新闻': 'See Article' 

        return (
            <div className = 'news-card' style={{cursor:'pointer'}} onClick= {this.openTab}>

                    <img className='border border-white' src={urlToImage}alt=""/>
                    <p>{title}</p>
            </div> 
            )

}
}

const mstp = (appState) => {
    // console.log(appState)
    return {appState}
}

export default connect(mstp)(withRouter(Newscard))
