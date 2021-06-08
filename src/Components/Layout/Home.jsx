import React from 'react'
import LoginSignupContainer from '../AccountActions/Signup/LoginSignupContainer'
import Title from '../Title'
import Newscontainer from '../News/Newscontainer'

export default function Home() {
    return (
        <>
            <div id='home-wrapper'>
            <Title/>
            <LoginSignupContainer />
            </div>
            <Newscontainer/>
        </>
    )
}
