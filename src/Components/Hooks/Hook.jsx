import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

// Hooks
import {useSelector, useDispatch} from 'react-redux'
import state from 'sweetalert/typings/modules/state'

const tagOptions = [
    {
        key: 'Profile',
        text: 'Profile',
        value: 'updateInfo',
        label: { color: 'black', empty: true, circular: true },
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
const handleDropdown = (e) => {
        
        console.log(e.target.innerText)
        if (e.target.innerText === 'Update Info')
        {
            // Render update form modal
        }
        else if (e.target.innerText === 'Profile'){
            // this.push.history.push(`/account/${}`)
            
        }
    }
export default function ProfileDropdown() {

    const mstp = useSelector(state => ({
        user: state.user
    })
        )
        

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
                        <Dropdown.Item onClick = {handleDropdown} key={option.value} {...option} />
                        ))}
                    </Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}