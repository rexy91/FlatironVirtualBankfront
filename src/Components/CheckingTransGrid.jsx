import React, { Component } from 'react'
import Newscard from './Newscard'
import {connect} from 'react-redux'
import DynamicSearch from '../Components/TransactionPage/DynamicSearch'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Button } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import uuid from 'react-uuid'

export class CheckingTransGrid extends Component {

    goback = () => {
        this.props.history.goBack();
    }

    whiteSpace = () => {

      return  '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'
    }
    render() {
        console.log(this.props.checkingOrSaving)
        // This is how we render the checking trans, so return state inside reduer needs to match this when updating the DOM.

        const transactions = this.props?.user?.checking.transactions
        console.log(transactions)
        // console.log(this.props)
        // Debugging
        // console.log(this.props.state.searchTerm)
        // console.log(transation.trans_type.toLowerCase().includes(this.props.searchTerm)
        // console.log(this.props.state.user.checking.transactions)
        // Filter that here 
              let arrayWeCareAbout = transactions?.filter(transaction => {
              return transaction.trans_type.toLowerCase().includes(this.props.searchTerm)
              })
        // Map here :
        let transactionMapper = this.props?.user?.checking ? arrayWeCareAbout.map( (transaction) => (
        <>
                <MDBRow>
                <MDBCol md =''>{transaction.date}</MDBCol>
                <MDBCol md ='3'>{transaction.trans_type}</MDBCol>
                <MDBCol md ='3'>{transaction.description}</MDBCol>
                <MDBCol md ='3' id='amount'>{this.whiteSpace()}{transaction.amount}</MDBCol>
                </MDBRow></>
        )):null 

        return (
            <div id='checkingTransContainer'>
                <h4>Transactions History:</h4>
                <DynamicSearch />
                <MDBContainer>
                <MDBRow>
                <MDBCol md ='3'><Button color='black'>Date</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Type</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Descritption</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Amount</Button></MDBCol>
                </MDBRow>
                {/* Can refactor, conditional render checking trans and saving trans  */}
                {transactionMapper}
                </MDBContainer>   
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


export default connect(mstp)(CheckingTransGrid)


