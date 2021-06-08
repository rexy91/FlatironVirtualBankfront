import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

export class Newscard extends Component {

    // Send user to the article's page with new tab. 
    openTab = () => {
        window.open(`${this.props.singleNews.url}`);
      }
      
    render() {
        // Getting news from Redux store, this.props has a single news' info. 
        const {title, urlToImage,url} = this.props.singleNews
        const languageTerary = this.props.appState.language ==='Chinese'? '观看新闻': 'See Article' 

        return (
            <div className = 'news-card border' style={{cursor:'pointer'}} onClick= {this.openTab}>
                    <img src={urlToImage}alt=""/>
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
