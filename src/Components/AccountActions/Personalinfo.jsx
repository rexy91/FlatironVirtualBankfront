import React, { Component } from 'react'
import {connect} from 'react-redux'
import Modalupdate from './Modalupdate'
import { Modal } from 'semantic-ui-react'
import { EditModal } from './EditModal'

export class Personalinfo extends Component {

    goBack = () => {
        this.props.history.goBack()
    }

    // updateInfo = () => {
    //     return <Modalupdate /> 
    // }

    handleEdit = (e) => {
        e.preventDefault()
    }

    renderEnglish =() =>{
        return (
            <div className='personalInfo'>
                <h3 style={{marginLeft:'20%'}}>Personal Information</h3>
                {/* <a href="" target="" onClick = {this.handleEdit}style={{marginLeft:'20%'}}>Edit</a> */}
                <EditModal/>
                <div className = 'ui grid'>
                    <div className = 'sixteen wide column border personalInfo-wrapper'>
                        <div className = 'ui grid'>
                                <div className="eight wide column">
                                        <p>First Name: <span>{this.props?.appState?.user?.first_name}</span></p> 
                                </div>
                                <div className="eight wide column">
                                        <p>Last Name: <span>{this.props?.appState?.user?.last_name}</span></p>
                                </div>
                                <div className = 'sixteen wide column'>
                                        <p>Address: <span>{this.props?.appState?.user?.billing_address}</span></p>
                                </div>
                                <div className = 'sixteen wide column'>
                                        <p>Email: <span>{this.props?.appState?.user?.email}</span></p>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <h3>Welcome: {this.props?.appState?.user?.username}</h3>
                <h4>Here are your Personal Info</h4>
                <br/>
                <p>First Name: {this.props?.appState?.user?.first_name} </p>
                <br/>
                <p>Last Name: {this.props?.appState?.user?.last_name} </p>
                <br/>
                <p>Email: {this.props?.appState?.user?.email} </p>
                <br/>
                <p>Billing Address: {this.props?.appState?.user?.billing_address} </p>
                <Modalupdate />
                <br/>
                <button onClick = {this.goBack}>Back</button> */}
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
        console.log(this.props)
        const languageTernry = this.props?.appState?.language ==='Chinese'? this.renderChinese(): this.renderEnglish()
        return (
            <div id='personalInfo'>
            {languageTernry}
            </div>
        )
    }
}

const mstp = (appState) => {
    return {appState}
}

export default connect(mstp)(Personalinfo)
