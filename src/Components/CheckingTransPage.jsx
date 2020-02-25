import React, { Component } from 'react'
import {connect} from 'react-redux'
import DynamicSearch from '../Components/TransactionPage/DynamicSearch'
export class CheckingTransPage extends Component {

    render() {
        console.log(this.props)
        const transactions = this.props.user.checking.transactions
        // Debugging
        // console.log(this.props.state.searchTerm)
        // console.log(transation.trans_type.toLowerCase().includes(this.props.searchTerm)
        // console.log(this.props.state.user.checking.transactions)
        // Filter that here 
              let arrayWeCareAbout = transactions.filter(transaction => {
              return transaction.trans_type.toLowerCase().includes(this.props.searchTerm)
              })
        console.log(arrayWeCareAbout)

        // Map here :
        let transactionMapper = this.props.user.checking ? arrayWeCareAbout.map( (transaction) => (
        <li>{transaction.amount} {transaction.trans_type}</li> 
        )) : null

        return (
            <div>
                <h4>Transactions History:</h4>
                <DynamicSearch />
                <ul>
                   {transactionMapper}
                </ul>
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
