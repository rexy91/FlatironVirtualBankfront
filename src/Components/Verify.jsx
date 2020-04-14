import React, { Component } from 'react'
import {connect} from 'react-redux'
import swal from 'sweetalert';

export class Verify extends Component {

    handleCode =(e) => {
        e.preventDefault()  
        if (e.target.verify_code.value === this.props?.appState?.code){
            localStorage.setItem('token',this.props?.appState?.token)
            this.props.history.push(`/account/${this.props?.appState?.user?.id}`) 
            if (this.props?.appState?.signup_type === 'Checking'){
                swal(`Welcome, ${this.props?.appState?.user?.username}`,
                "$5000 signup bonus has been desposited into you checking account.",
                "success");     
            } else if (this.props?.appState?.signup_type === 'Saving'){
                swal(`Welcome, ${this.props?.appState?.user?.username}`,
                "$5000 signup bonus has been desposited into you saving account.",
                "success"); 
            }
        }
        else {
            swal(``,
            `Invalid Code`,
            "error")
        }
    }

    renderEnglish = () => {
        return (
            <div id='verify-section'>
                <h3>Welcome</h3>
                <form  onSubmit = {this.handleCode} style = {{marginTop:'18vh'}}>
                    <p>We have sent a code to {this.props?.appState?.user?.email}</p>
                    <label htmlFor=""> Please enter the code to finish the registration:</label>
                    <input type="text" name='verify_code'/>
                    <input type="submit"/>
                </form>
            </div>)
    }

    renderChinese = () => {
        return (
            <div id='verify-section'>
                <h3>欢迎</h3>
                <form  onSubmit = {this.handleCode} style = {{marginTop:'18vh'}}>
                    <p>我们发了一个验证号码到此邮箱 {this.props?.appState?.user?.email}</p>
                    <label htmlFor=""> 请输入验证号码完成注册:</label>
                    <input type="text" name='verify_code'/>
                    <input type="submit">提交</input>
                </form>
            </div>)
    }

    render() {
        return (
            <>
                {this.renderEnglish()}
            </>
        )
    }
}

const mstp = (appState) => {
    return {appState}
}
export default connect(mstp)(Verify)
