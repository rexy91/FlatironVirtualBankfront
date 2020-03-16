import React, { Component } from 'react'
import { Dropdown, Input, Modal } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {dispatchChartData} from './Redux/actions'
import Chart from '../Components/Chart'
import {Switch, Route} from 'react-router'

const tagOptions = [
    {
        key: 'Profile',
        text: 'Profile',
        value: 'updateInfo',
        label: { color: 'black', empty: true, circular: true },
    },
    {
        key: 'Expense Summary',
        text: 'Expense Summary',
        value: 'updateInfo',
        label: { color: 'yellow', empty: true, circular: true },
    }
    ,

  {
    key: 'Announcement',
    text: 'Transfer',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  }
]

const ChinesetagOptions = [
    {
        key: 'Profile',
        text: '个人资料',
        value: 'updateInfo',
        label: { color: 'black', empty: true, circular: true },
    },
    {
        key: 'Expense Summary',
        text: '消费总结',
        value: 'updateInfo',
        label: { color: 'yellow', empty: true, circular: true },
    }
,
  {
    key: 'Transfer',
    text: '进行转账',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  }
]

export class ProfileDropdown extends Component {
    
    // state = {
    //     chartData: []
    // }

    handleDropdown = (e) =>{
        const id = this.props.appState.user.id
        if (e.target.innerText === 'Update Info')
        {
            // Render update form modal
            
        }
        else if (e.target.innerText === 'Profile' || e.target.innerText === '个人资料'){
            console.log('here')
            console.log(this.props)
            this.props.history.push(`/account/${id}/profile`)
    
        }
        else if (e.target.innerText === 'Expense Summary' || e.target.innerText ==='消费总结'){
            fetch(`https://flatironbankapi.herokuapp.com/account/${id}/expense_summary`)
            .then(res => res.json())
            .then(chartDataArray => {
                // console.log(chartDataArray)
                this.props.dispatchChartData(chartDataArray)
                // Chart will only receive the props when url is hit after the dispatch, so need to push to the url after the aciton.
                // Accessing the url directly brefore the dispatch won't have the chart data the first time. 
                this.props.history.push(`/account/${id}/expense`)      
            })
        }
        else if (e.target.innerText === 'Transfer' || e.target.innerText ==='进行转账'){
                this.props.history.push(`${id}/instant_transfer`)
        }
    }

    renderEnglish =() => {
        return (
            <div>
                {/* Cant defien route here  */}
              {/* <Switch>
                    <Route exact path ='/account/:id/expense' render = {() => <Chart />} />
              </Switch> */}
              <Dropdown
                    text='Actions'
                    icon='info'
                    floating
                    labeled
                    button
                    className='icon'
                >
                    <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Header icon='tags' content='Tag Label' />
                    <Dropdown.Menu scrolling>
                        {tagOptions.map((option) => (
                        <Dropdown.Item onClick = {this.handleDropdown} key={option.value} {...option} />
                        ))}
                    </Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>                
            </div>
        )
    }

    renderChinese =() => {
        return (
            <div>
                {/* Cant defien route here  */}
              {/* <Switch>
                    <Route exact path ='/account/:id/expense' render = {() => <Chart />} />
              </Switch> */}
              <Dropdown
                    text='选项'
                    icon='info'
                    floating
                    labeled
                    button
                    className='icon'
                >
                    <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Header icon='tags' content='Tag Label' />
                    <Dropdown.Menu scrolling>
                        {ChinesetagOptions.map((option) => (
                        <Dropdown.Item onClick = {this.handleDropdown} key={option.value} {...option} />
                        ))}
                    </Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>                
            </div>
        )
    }

    render() {
            const languageTernery = this.props?.appState?.language === 'Chinese'? this.renderChinese(): this.renderEnglish()

        return(
            <>
                {languageTernery}
            </>
        )
    }
}

const mstp = (appState) => {

    return {appState}
}

export default connect(mstp, {dispatchChartData})(withRouter(ProfileDropdown))
