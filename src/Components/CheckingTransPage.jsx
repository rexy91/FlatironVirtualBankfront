import React, { Component } from 'react'
import {connect} from 'react-redux'
export class CheckingTransPage extends Component {

    render() {

        let transactionMapper = this.props.user.checking.transactions.map( (transaction) => (
        <li>{transaction.amount} {transaction.trans_type}</li>
        ))
            // console.log('here')
            // Why this doesn;t work, if console.log this.props.user.checking it is not undefined.

            // BUt it works after connect is used. 
            console.log(this.props.user.checking.transactions)

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
export default connect(mstp)(CheckingTransPage)
