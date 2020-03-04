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

    renderEnglish = () => {
        // console.log(this.props.checkingOrSaving)
        // This is how we render the checking trans, so return state inside reduer needs to match this when updating the DOM.

        const transactions = this.props?.user?.checking.transactions
        // console.log(transactions)
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
                <MDBRow id ='singleCheckingTrans'>
                <MDBCol md =''>{transaction.date}</MDBCol>
                <MDBCol md ='3'>{transaction.trans_type}</MDBCol>
                <MDBCol md ='3'>{transaction.description}</MDBCol>
                <MDBCol md ='3' id='amount'>{this.whiteSpace()}{transaction.amount}</MDBCol>
                </MDBRow></>
        )):null 
        return (
            <>
            <h4>Transactions History:</h4>
            <DynamicSearch />
            <MDBContainer>
                <MDBRow>
                <MDBCol md ='3'><Button color='black'>Date</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Type</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Descritption</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Amount</Button></MDBCol>
                </MDBRow>
            </MDBContainer>
            <div id='checkingTransContainer'>
                <MDBContainer>
                {/* Can refactor, conditional render checking trans and saving trans  */}
                {transactionMapper}
                </MDBContainer>   
                <button onClick = {this.goback}>Back</button>             
            </div>
            </>
        )
    }

    renderChinese = () => {
        // console.log(this.props.checkingOrSaving)
        // This is how we render the checking trans, so return state inside reduer needs to match this when updating the DOM.
        const transactions = this.props?.user?.checking.transactions
        // console.log(transactions)
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
                <MDBRow id ='singleCheckingTrans'>
                <MDBCol md ='3'>{transaction.date}</MDBCol>
                <MDBCol md ='3'>{transaction.trans_type}</MDBCol>
                <MDBCol md ='3'>{transaction.description}</MDBCol>
                <MDBCol md ='3' id='amount'>{this.whiteSpace()}{transaction.amount}</MDBCol>
                </MDBRow></>
        )):null 
        return (
             <>
            <h4>查看您的交易记录:</h4>
            <DynamicSearch />
            <MDBContainer>
                <MDBRow>
                <MDBCol md ='3'><Button color='black'>日期</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>交易类型</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>交易细节</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>交易金额</Button></MDBCol>
                </MDBRow>
            </MDBContainer>

            <div id='checkingTransContainer'>
                <MDBContainer>
                {/* Can refactor, conditional render checking trans and saving trans  */}
                {transactionMapper}
                </MDBContainer>   
                <button onClick = {this.goback}>回退</button>             
            </div>
            </>
        )
    }
        
    render() {
            // console.log(this.props?.langauge === 'Chinese')
            // const languageTernry = this.props.language==='Chinese'? this.renderChinese(): this.renderEnglish()
            const languageTernery = this.props.language === 'Chinese' ? this.renderChinese() : this.renderEnglish()
            // console.log(this.props)
        return (
                
            <>
                {languageTernery}
            </>
        )
    }
}

const mstp = (appState) => {
    //appState will returns the current entire state.
    // console.log(appState)
    // This will return the whole state inside store. 
    // So searchTerm won't be undefined at first. 
    let x = '' 
    if (appState.searchTerm){
        x = appState.searchTerm
    }
    return {searchTerm: x,
            language: appState.language}
}


export default connect(mstp)(CheckingTransGrid)


