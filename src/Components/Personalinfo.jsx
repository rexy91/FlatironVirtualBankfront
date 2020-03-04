import React, { Component } from 'react'
import {connect} from 'react-redux'
import Modalupdate from './Modalupdate'
import { Modal } from 'semantic-ui-react'


export class Personalinfo extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    // updateInfo = () => {
    
    //     return <Modalupdate /> 
    // }

    renderEnglish =() =>{
        return (
            <div>
                <h3>Welcome: {this.props?.appState?.user?.username}</h3>
                <h4>Here are your Personal Info</h4>
                <br/>
                <p>First Name: {this.props?.appState?.user?.first_name} </p>
                <br/>
                <p>Last Name: {this.props?.appState?.user?.last_name} </p>
                <br/>
                <p>Email: {this.props?.appState?.user?.email} </p>
                <br/>
                <p>Billing Address: {this.props?.appState?.user?.billing_address} </p>
                {/* <button onClick = {this.updateInfo()}>Update</button> */}
                <Modalupdate />
                <br/>
                <button onClick = {this.goBack}>Back</button>
            </div>
        )
    }

    renderChinese = () => {
        return (
            <div>
                <h3>欢迎: {this.props?.appState?.user?.username}</h3>
                <h4>这是你的个人资料:</h4>
                <br/>
                <p>名字: {this.props?.appState?.user?.first_name} </p>
                <br/>
                <p>姓氏: {this.props?.appState?.user?.last_name} </p>
                <br/>
                <p>电子邮件地址: {this.props?.appState?.user?.email} </p>
                <br/>
                <p>你的信件地址: {this.props?.appState?.user?.billing_address} </p>
                {/* <button onClick = {this.updateInfo()}>Update</button> */}
                <Modalupdate />
                <br/>
                <button onClick = {this.goBack}>后退</button>
            </div>
        )
    }

    render() {

        const languageTernry = this.props?.appState?.language ==='Chinese'? this.renderChinese(): this.renderEnglish()
        return (
            <>
            {languageTernry}
            </>
        )
    }
}

const mstp = (appState) => {
    return {appState}
}

export default connect(mstp)(Personalinfo)
