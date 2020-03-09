import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
export class SavingTransPage extends Component {
    
    goback = () => {
        this.props.history.goBack();
    }
    render() {

        let transactionMapper = this.props?.user?.saving ? this.props?.user?.saving?.transactions.map( (transaction) => (
        <li>{transaction.amount} {transaction.trans_type}</li>
        )) : null

        return (
            <div>
                <h4>Transactions History:</h4>
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
}

// export default connect (mstp)(CheckingTransPage)
// export default connect(mstp)(SavingTransPage)
export default withRouter(SavingTransPage)
