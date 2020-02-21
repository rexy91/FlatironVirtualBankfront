import React from 'react'
import Header from './Header'
import NavBar from '../Components/NavBar'
import LoginSignupContainer from './LoginSignupContainer'
import BonusAd from './BonusAd'
export default function Home() {
    return (
            
        <div>
            <img id ='logo' src="https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg" alt="logo"/>
            <Header/>
            <NavBar/>
            <LoginSignupContainer />
            <BonusAd />
        </div>
    )
}
