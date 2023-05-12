import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Counterstaff from '../../Pages/Home/Counterstaff'
import User from '../../Pages/Home/User'
import Bookpooja from '../../Pages/User/Bookpooja'
import Donation from '../../Pages/User/Donation'
import Pubabout from '../../Pages/public_user/Pubabout'
import PubContact from '../../Pages/public_user/PubContact'
import Pubgall from '../../Pages/public_user/Pubgall'
import Userlogin from '../../Pages/public_user/Userlogin'
import Regform from '../../Pages/public_user/Regform'
import Accounts from '../../Pages/Home/Accounts'
import Usergall from '../../Pages/User/Usergall'
import Usercontact from '../../Pages/User/Usercontact'
import Userabout from '../../Pages/User/Userabout'
import Expenses from '../../Pages/Accounts/Expenses'
import Pcalender from '../../Pages/User/Pcalender'
import { Poojaschedule } from '../../Pages/User/Poojaschedule'
import Accdon from '../../Pages/Accounts/Accdon'
import Viewexpense from '../../Pages/Reports/Viewexpense'
import Daybookgen from '../../Pages/Accounts/Daybookgen'
import Daybookview from '../../Pages/Reports/Daybookview'
import Donationstaf from '../../Pages/Staff/Donationstaf'
import Incomstaf from '../../Pages/Accounts/Incomstaf'
import Incomeview from '../../Pages/Accounts/Incomeview'
import Schedulpooj from '../../Pages/Staff/Schedulpooj'
import Viewbooked from '../../Pages/Staff/Viewbooked'
import Booked from '../../Pages/Accounts/Booked'
import Daybookdate from '../../Pages/Accounts/Daybookdate'
import Monthdate from '../../Pages/Accounts/Monthdate'
import Incomerepo from '../../Pages/Reports/Incomerepo'
import Yearlydate from '../../Pages/Accounts/Yearlydate'
import Month from '../../Pages/Accounts/Month'
import Addexpense from '../../Pages/Accounts/Addexpense'
import Accpooja from '../../Pages/Reports/Accpooja'
import Monthlyrepo from '../../Pages/Reports/Monthlyrepo'
import Viewdon from '../../Pages/Reports/Viewdon'
import Balance_sheet from '../../Pages/Reports/Balance_sheet'
import Poojaadd from '../../Pages/Staff/Poojaadd'
import Poojaview from '../../Pages/Staff/Poojaview'
import Notification from '../../Pages/User/Notification'
import ViewBookings from '../../Pages/User/ViewBookings'


const Mainrouter = () => {
  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>   {/* app Launching with home page*/}
     <Route path='/login' element={<Userlogin/>}/>
     <Route path='/register' element={<Regform/>}/>
     <Route path='/accounts' element={<Accounts/>}/>
     <Route path='/user' element={<User/>}/>
     <Route path='/counterstaff' element={<Counterstaff/>}/>
     <Route path='/book/:id' element={<Bookpooja/>}/>
     <Route path='/bookings/' element={<ViewBookings/>}/>
     <Route path='/donation' element={<Donation/>}/>
     <Route path='/about' element={<Pubabout/>}/>
     <Route path='/contact' element={<PubContact/>}/>
     <Route path='/gallery' element={<Pubgall/>}/>
     <Route path='/ugallery' element={<Usergall/>}/>
     <Route path='/ucontact' element={<Usercontact/>}/>
     <Route path='/uabout' element={<Userabout/>}/>
     <Route path='/addexpns' element={<Addexpense/>}/>
     <Route path='/calender' element={<Pcalender/>}/>
     <Route path='/schedule' element={<Poojaschedule/>}/>
     <Route path='/accdon' element={<Accdon/>}/>
     <Route path='/viewexpn' element={<Viewexpense/>}/>
     <Route path='/daybkgen' element={<Daybookgen/>}/>
     <Route path='/daybkview' element={<Daybookview/>}/>
     <Route path='/stafdon' element={<Donationstaf/>}/>
     <Route path='/stafinco' element={<Incomstaf/>}/>
     <Route path='/stafincoview' element={<Incomeview/>}/>
     <Route path='/stafbook' element={<Schedulpooj/>}/>
     <Route path='/scheduledstaf' element={<Viewbooked/>}/>
     <Route path='/accbooked' element={<Booked/>}/>
     <Route path='/daydate' element={<Daybookdate/>}/>
     <Route path='/monthdate' element={<Monthdate/>}/>
     <Route path='/incoreport' element={<Incomerepo/>}/>
     <Route path='/dateyear' element={<Yearlydate/>}/>
     <Route path='/month' element={<Month/>}/>
     <Route path='/datexpense' element={<Expenses/>}/>
     <Route path='/accpooja' element={<Accpooja/>}/>
     <Route path='/monthlyrepo' element={<Monthlyrepo/>}/>
     <Route path='/dontable' element={<Viewdon/>}/>
     <Route path='/balancesheet' element={<Balance_sheet/>}/>
     <Route path='/addpooja' element={<Poojaadd/>}/>
     <Route path='/viewpoojastaff' element={<Poojaview/>}/>
     <Route path='/Notific' element={<Notification/>}/>










     
     




     
    
     </Routes> 
    
    </>
  )
}

export default Mainrouter