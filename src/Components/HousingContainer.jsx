import React, { Component } from 'react'

export class HousingContainer extends Component {


componentDidMount(){

    // console.log('here')
    fetch("https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "4bb1761d4dmsh2719e59b609adcfp15cf3fjsnd37fe4d86fcd"
        }
    })
    .then(resp => resp.json())
    .then(console.log) 

}


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default HousingContainer
