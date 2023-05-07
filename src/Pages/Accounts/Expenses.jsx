import React from 'react'
import Toolbar from '../../Components/Toolbar/Toolbar'
import Headeracc from '../../Components/Navbar/Headeracc'
import Expense from '../../Components/Accounts/Expense'
import Footer from '../../Components/Footer/Footer'
import Dateexpens from '../../Components/Accounts/Dateexpens'

const Expenses = () => {
  return (
    <div><Toolbar/>
    <Headeracc/>
    <Dateexpens/>
    <Footer/></div>
  )
}

export default Expenses