import React, { Component } from 'react'
import {connect} from 'react-redux'
import DynamicSearch from '../TransactionPage/DynamicSearch'
export class CheckingTransPage extends Component {

    goback = () => {
        this.props.history.goBack();
    }

    render() {
        
        return (
            <div>
                <h4>Transactions History:</h4>
                <DynamicSearch />
                <div id = 'checkingTransContainer'>
                    
                </div>
                <button onClick = {this.goback}>Back</button>
            </div>
        )
    }
}

const mstp = (appState) => {
    // console.log(appState)
    // This will return the whole state inside store. 
    // So searchTerm won't be undefined at first. 
    let x = '' 
    if (appState.searchTerm){
        x = appState.searchTerm
    }

    return {searchTerm: x}
}

export default connect(mstp)(CheckingTransPage)
