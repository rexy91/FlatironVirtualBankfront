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

        return (
            <div>
                    <MDBCard id = 'news-card' style={{ width: "22rem" }}>
                        <MDBCardImage  style = {imgStyle} className="img-fluid" src={urlToImage} waves />
                        <MDBCardBody>
                        <MDBCardTitle>{title}</MDBCardTitle>
                        {/* <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </MDBCardText> */}
                    {/* <a herf ='www.yahoo.com' target = '_blank'> */}
                        <MDBBtn onClick = {this.openTab} >See Article</MDBBtn>
                    {/* </a> */}
                        </MDBCardBody>
                    </MDBCard>
    
            </div> )
}
}

const mstp = (appState) => {
    // console.log(appState)
    return {appState}
}

export default connect(mstp)(withRouter(Newscard))
