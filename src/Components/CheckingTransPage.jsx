import React, { Component } from 'react'
import {connect} from 'react-redux'
import DynamicSearch from '../Components/TransactionPage/DynamicSearch'
export class CheckingTransPage extends Component {


    goback = () => {
        this.props.history.goBack();
    }

    render() {
        // console.log(this.props)
        // This is how we render the checking trans, so return state inside reduer needs to match this when updating the DOM.

        const transactions = this.props.user.checking.transactions
        // console.log(this.props)
        // Debugging
        // console.log(this.props.state.searchTerm)
        // console.log(transation.trans_type.toLowerCase().includes(this.props.searchTerm)
        // console.log(this.props.state.user.checking.transactions)
        // Filter that here 
              let arrayWeCareAbout = transactions.filter(transaction => {
              return transaction.trans_type.toLowerCase().includes(this.props.searchTerm)
              })
              
        // Map here :
        let transactionMapper = this.props.user.checking ? arrayWeCareAbout.map( (transaction) => (
        <>
            <li>AmountTypeDescription</li>
        <li>${transaction.amount} {transaction.trans_type}{transaction.description}</li> </>
        )) : null
        
        return (
            <div>
                <h4>Transactions History:</h4>
                <DynamicSearch />
                <ul>
                   {transactionMapper}
                </ul>
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
