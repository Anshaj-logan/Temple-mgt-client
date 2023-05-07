import React from 'react'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Headeracc from '../../Components/Navbar/Headeracc'
import Yearly from '../../Components/Reports/Yearly'
import Footer from '../../Components/Footer/Footer'

const Balance_sheet = () => {
  return (
    <div><Toolbar/>
    <Headeracc/>
    <Yearly/>
    <Footer/></div>
  )
}

export default Balance_sheet