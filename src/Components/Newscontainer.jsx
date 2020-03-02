import React, { Component } from 'react'
import Newscard from './Newscard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

export class Newscontainer extends Component {

    state = {
        newsArray: []
    }
    
    componentDidMount(){
        // console.log('here')
        fetch('http://newsapi.org/v2/everything?from=2020-03-01&sortBy=publishedAt&apiKey=b5b343b90e4d4f0e89f4da475f9e01d8&q=finance')
        .then(res => res.json())
        .then(newsRes => { 
                // console.log(this.props)
                // console.log(newsRes.articles)
                // this.props.saveNewsToStore(newsRes.articles)

            })
      }
    
    render() {

        // console.log(this.props.newsArray)
        // // console.log(this.state.newsArray.articles)
        // let newsMapper = this.props.newsArray.map(singleNews => {
        //         console.log(singleNews)
        //     })
        return (
            <div id = 'newsCardContainer'>
                    <h3> sdfsdfdsf</h3>
                    {/* {newsMapper} */}
            </div>
        )
    }
}

const mstp = (appState) => {
    // console.log(appState)
    return {newsArray: appState.newsArray}
}

export default connect(mstp)(withRouter(Newscontainer))
