import React, { Component } from 'react'
import Newscard from './Newscard'
import {connect} from 'react-redux'
import DynamicSearch from '../Components/TransactionPage/DynamicSearch'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Button } from 'semantic-ui-react'
import {sortTransAmount} from '../Components/Redux/actions'
import {withRouter} from 'react-router-dom'
import uuid from 'react-uuid'

export class CheckingTransGrid extends Component {
    // Sort and unsort based on clicked.
    state = {
        sortAmount: false
    }

    sortByAmount =() =>{
        // Get array here, sort it and update the state inside the store.
        //arr.sort((a, b) => a[prop] - b[prop]
        // this.setState({
        //     sortAmount: !this.state.sortAmount 
        // })

        this.setState(prevState => {
            return {sortAmount: !prevState.sortAmount}
        })

        // console.log(this.state.sortAmount)
        // Old trans will be lost, once state is upon sorting. 
            // This solution won't work, we need to get the unsortedArray which was saved seperately when user login.
        // const oldTransactions = this.props.user.checking.transactions
        // const copyArray = [...oldTransactions]

        const unsortedTrans = this.props.unsortedTrans
        const sortedTransctions = this.props.user.checking.transactions.sort((a,b)=> a.amount - b.amount)

        // If sortAmount is false, update with old trans array. Else update with sorted array. 
        // this.state.sortAmount? this.props.sortTransAmount(sortedTransctions): this.props.sortTransAmount(oldTransactions)
        
        if (this.state.sortAmount === true){
                console.log(this.props)
                console.log(unsortedTrans)

                // this.props.sortTransAmount(unsortedTrans)
                
        }
        else if (this.state.sortAmount === false){
                //oldTransactions will be mutaetd, need to spread.
                console.log('there')
                // console.log(sortedTransctions)
                //If we want to unsort, then we will need a way to store the unsorted trans state,
                //Once its sorted, we can not convert it back to the original order, we can only change between
                //ascending, and descending order. 
                this.props.sortTransAmount(sortedTransctions)
        }
    }
    goback = () => {
        this.props.history.goBack();
    }

    whiteSpace = () => {

      return  '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'
    }

    renderEnglish = () => {
        // console.log(this.props.checkingOrSaving)
        // This is how we render the checking trans, so return state inside reduer needs to match this when updating the DOM.

        const transactions = this.props?.user?.checking?.transactions
        // console.log(transactions)
        // console.log(this.props)
        // Debugging
        // console.log(this.props.state.searchTerm)
        // console.log(transation.trans_type.toLowerCase().includes(this.props.searchTerm)
        // console.log(this.props.state.user.checking.transactions)
        // Filter that here 
              let arrayWeCareAbout = transactions?.filter(transaction => {
              return transaction.trans_type.toLowerCase().includes(this.props.searchTerm) || transaction.amount.toString().includes(this.props.searchTerm)
              })
        // Map here :

        let transactionMapper = this.props?.user?.checking?arrayWeCareAbout.map( (transaction) => (
        <>
                <MDBRow id ='singleCheckingTrans'>
                <MDBCol md =''>{transaction.date}</MDBCol>
                <MDBCol md ='3'>{transaction.trans_type}</MDBCol>
                <MDBCol md ='3'>{transaction.description}</MDBCol>
                <MDBCol md ='3' id='amount'>{this.whiteSpace()}{transaction.amount}</MDBCol>
                </MDBRow></>

        )):null 
        return (
            <div id='checking-trans-page'>
            <h4>Transactions History:</h4>
            <DynamicSearch />
            <MDBContainer>
                <MDBRow>
                <MDBCol md ='3'><Button color='black'>Date</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Type</Button></MDBCol>
                <MDBCol md ='3'><Button color='black'>Descritption</Button></MDBCol>
                <MDBCol md ='3'><Button onClick = {this.sortByAmount} color='black'>Amount</Button></MDBCol>
                </MDBRow>
            </MDBContainer>
            <div id='checkingTransContainer'>
                <MDBContainer>
                {/* Can refactor, conditional render checking trans and saving trans  */}
                {transactionMapper}
                </MDBContainer>   
                <button onClick = {this.goback}>Back</button>             
            </div>
            </div>
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
                <MDBCol md ='3'><Button onClick={this.sortByAmount} color='black'>交易金额</Button></MDBCol>
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
            console.log(this.props) 
            // console.log(this.props?.langauge === 'Chinese')
            // const languageTernry = this.props.language==='Chinese'? this.renderChinese(): this.renderEnglish()
            const languageTernery = this.props.language === 'Chinese' ? this.renderChinese() : this.renderEnglish()
            // console.log(this.props)
        return (
                
            <div id='checkingTransPagee'>
                {languageTernery}
            </div>
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
            language: appState.language,
            unsortedTrans: appState.unsortedTrans}
}


export default connect(mstp, {sortTransAmount})(CheckingTransGrid)


