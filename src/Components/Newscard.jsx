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
        const imgStyle = {height:'15vw'}
        const languageTerary = this.props.appState.language ==='Chinese'? '观看新闻': 'See Article' 

        return (
            <div>
                    <MDBCard id = 'news-card' style={{ width: "22rem" }}>
                        <MDBCardImage  style = {imgStyle} className="img-fluid" src={urlToImage} waves />
                        <MDBCardBody>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        <MDBBtn onClick = {this.openTab} >{languageTerary}</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
            </div> 
            )

}
}

const mstp = (appState) => {
    // console.log(appState)
    return {appState}
}

export default connect(mstp)(withRouter(Newscard))
