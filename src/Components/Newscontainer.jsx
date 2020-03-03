import React, { Component } from 'react'
import Newscard from './Newscard'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {saveNewsToStore} from './Redux/actions'
import uuid from 'react-uuid'
import Newsgrid from '../Components/Newsgrid'
export class Newscontainer extends Component {

    componentDidMount(){
        // Convert inso yyyy--mm--dd format 
        let todayDate = new Date
        let newDate = todayDate.toISOString().slice(0,10)
        // fetch(`http://newsapi.org/v2/everything?from=${newDate}&sortBy=publishedAt&apiKey=b5b343b90e4d4f0e89f4da475f9e01d8&q=finance`)
        // .then(res => res.json())
        // .then(newsRes => { 
        //         // console.log(this.props)
        //         console.log(newsRes.articles)
        //         this.props.saveNewsToStore(newsRes.articles)
        //     })

      }
    render() {
        // First render is undefined.
        // console.log(this.props.newsArray)
        return (
            <div id = 'newsCardContainer'>
                    <Newsgrid />
            </div>
        )
    }
}


export default Newscontainer
