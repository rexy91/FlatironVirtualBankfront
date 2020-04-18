import React, { Component } from 'react'
import Newsgrid from '../Components/Newsgrid'
import Footer from './Footer'

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
                    <Footer/>
            </div>
        )
    }
}


export default Newscontainer
