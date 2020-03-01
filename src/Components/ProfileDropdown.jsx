import React, { Component } from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

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
    key: 'UpdateInfo',
    text: 'Update Info',
    value: 'updateInfo',
    label: { color: 'grey', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Transfer',
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
        else if (e.target.innerText === 'Profile'){
            console.log('here')
            this.props.history.push(`/account/${id}/profile`)
    
        }
        else if (e.target.innerText === 'Expense Summary'){
            
            fetch(`http://localhost:3000/account/${id}/expense_summary`)
            .then(res => res.json())
            .then(console.log)
        }
    }

    render() {
        return (
            <div>
              <Dropdown
                    text='Update'
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
}

const mstp = (appState) => {

    return {appState}
}

export default connect(mstp)(withRouter(ProfileDropdown))
