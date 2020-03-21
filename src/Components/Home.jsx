import React from 'react'
import Header from './Header'
import LoginSignupContainer from '../Components/AccountActions/LoginSignupContainer'
import BonusAd from './BonusAd'
import Footer from './Footer'
import Particles from './Particles'
import MDBSignup from '../Components/AccountActions/MDBSignup'
import Title from './Title'
import News from './Newscontainer'
export default function Home() {
    return (
        <>
        {/* <div id='home-wrapper'> */}
        
            <div id='home-wrapper'>
            <Title/>
            <LoginSignupContainer />
            </div>
            <News/>
 
        </>
    )
}
