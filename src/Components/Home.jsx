import React from 'react'
import Header from './Header'
import LoginSignupContainer from './LoginSignupContainer'
import BonusAd from './BonusAd'
import Footer from './Footer'
import Particles from './Particles'
import MDBSignup from './MDBSignup'
import Title from './Title'
import News from './Newscontainer'
export default function Home() {
    return (
            
        <div id='home-wrapper'>
            {/* <img id ='logo' src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg" alt="logo"/> */}
            <Title/>
            <LoginSignupContainer />
            {/* <MDBSignup/> */}
            {/* <Particles /> */}
            <News />
            {/* <Footer /> */}
        </div>
    )
}
