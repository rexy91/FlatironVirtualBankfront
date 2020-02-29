import React, { Component } from 'react'
import Newscard from './Newscard'

export class Newscontainer extends Component {

    state = {
        newsArray : []
    } 



    render() {
        // console.log(this.state.newsArray.articles)

        // let newsMapper = this.state.newsArray.articles.map(singleNews => {
        //     return  <Newscard singleNews = {singleNews} /> 
        //     })

        return (
            <div id = 'newsCardContainer'>
                    <h3> sdfsdfdsf</h3>
                    {/* {newsMapper} */}
            </div>
        )
    }
}

export default Newscontainer
