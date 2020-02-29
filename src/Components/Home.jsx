import React from 'react'
import Header from './Header'
import LoginSignupContainer from './LoginSignupContainer'
import BonusAd from './BonusAd'
import Footer from './Footer'
import Particles from './Particles'
import MDBSignup from './MDBSignup'
import News from './Newscontainer'
export default function Home() {
    return (
            
        <div>
            {/* <img id ='logo' src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg" alt="logo"/> */}
            <LoginSignupContainer />
            <BonusAd />
            {/* <MDBSignup/> */}
            {/* <Particles /> */}
            <Footer />
            <News />
        </div>
    )
}
