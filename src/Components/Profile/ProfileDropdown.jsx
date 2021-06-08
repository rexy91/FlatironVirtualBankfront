import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {dispatchChartData} from '../Redux/actions'

const tagOptions = [
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
    
    handleDropdown = (e) =>{
        const id = this.props.appState.user.id
        if (e.target.innerText === 'Update Info')
        {
            // Render update form modal
            
        }
        else if (e.target.innerText === 'Profile' || e.target.innerText === '个人资料'){
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
        else if (e.target.innerText ==='Donate' || e.target.innerText ==='捐款'){
                console.log('here')
                this.props.history.push(`/account/${id}/donations`)
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
            <div style={{marginTop:'13vh'}}>
                {languageTernery}
            </div>
        )
    }
}

const mstp = (appState) => {

    return {appState}
}

export default connect(mstp, {dispatchChartData})(withRouter(ProfileDropdown))
