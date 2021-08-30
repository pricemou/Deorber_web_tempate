import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Body from '../Body/Body'
import NavabaMenu from '../Menu/NavabaMenu'

const Home = () => {
    return (
        <div id="page">
            <NavabaMenu/>
            <Header/>
            <Menu/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Home;
