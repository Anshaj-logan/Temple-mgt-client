import React from 'react';
import Toolbar from '../../Components/Toolbar/Toolbar'
import Header from '../../Components/Navbar/Header'
import Book from '../../Components/User/Book'
import Footer from '../../Components/Footer/Footer'
import Bookings from '../../Components/User/Bookings';

const ViewBookings = () => {
    return (
        <div>
            <Toolbar />
            <Header />
            <Bookings />
            <Footer />
        </div>
    );
}

export default ViewBookings;
