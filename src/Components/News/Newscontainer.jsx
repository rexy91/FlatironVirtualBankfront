import React, { Component } from 'react'
import Newsgrid from './Newsgrid'
import Footer from '../Layout/Footer'

export class Newscontainer extends Component {

    componentDidMount(){
        // Convert inso yyyy--mm--dd format 
        let todayDate = new Date
        let newDate = todayDate.toISOString().slice(0,10)

      }
    render() {
        // First render is undefined.
        return (
            <div id = 'newsCardContainer'>
                    <Newsgrid />
                    <Footer/>
            </div>
        )
    }
}


export default Newscontainer
