import React, { Component } from 'react'
import {connect} from 'react-redux'
export class SavingTransPage extends Component {
    
    render() {

        let transactionMapper = this.props.user.saving.transactions.map( (transaction) => (
        <li>{transaction.amount} {transaction.trans_type}</li>
        ))

        return (
            <div>
                <h4>jjj</h4>
                <ul>
                   {transactionMapper}
                </ul>
            </div>
        )
    }
}

const mstp = (appState) => {
    console.log(appState)
}

// export default connect (mstp)(CheckingTransPage)
export default connect(mstp)(SavingTransPage)
