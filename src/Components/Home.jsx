import React from 'react'
import LoginSignupContainer from '../Components/AccountActions/LoginSignupContainer'
import Title from './Title'
import News from './Newscontainer'

export default function Home() {
    return (
        <>
            <div id='home-wrapper'>
            <Title/>
            <LoginSignupContainer />
            </div>
            <News/>
        </>
    )
}
