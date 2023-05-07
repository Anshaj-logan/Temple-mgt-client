import React from 'react'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Hero from '../../Components/Hero/Hero'
import Hearderpub from '../../Components/Navbar/Hearderpub'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Toolbar/>
        <Hearderpub/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Home