import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("loginId")
    localStorage.removeItem("role")
    localStorage.removeItem("user_id")
    navigate('/')
  }
  return (
    <div><header
    id="header"
    className="fixed-top d-flex align-items-center"
  >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <div className="logo me-auto">
        <h1>
          <a href="index.html">
            <c>Sree</c> Vaisravana Temple
          </a>
        </h1>
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link scrollto active" href=""><Link to={'/user'}>Home</Link>
              
            </a>
          </li>
          {/* <li>
            <a className="nav-link scrollto" href=""><Link to={'/calender'}>
              Panchangam Calendar</Link>
            </a>
          </li> */}
          {/* <li className="dropdown">
            <a href="#">
              <span>Poojas</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Poojas</a>
              </li>
              <li>
                <a href=""><Link to={'/schedule'}> Scheduled Poojas</Link></a>
              </li>
            </ul>
          </li> */}
          <li>
            <a className="nav-link scrollto" href=""><Link to={'/donation'}>
              Donation
            </Link>
              
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Explore</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href=""><Link to={'/Notific'}> Notifications</Link></a>
              </li>
              <li>
                <a href=""><Link to={'/ugallery'}>Gallery</Link> </a>
              </li>
              {/* <li>
                <a href=""><Link to={'/ucontact'}> Contact Us</Link></a>
              </li> */}
              <li>
                <a href=""> <Link to={'/uabout'}> About</Link></a>
              </li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <a href="" className="book-a-table-btn scrollto">
       {/* <Link to={'/book'}>  Schedule a Pooja</Link> */}
       <Link to={'/schedule'}>  Schedule a Pooja</Link>
      </a>
      <a href="" className="book-a-table-btn scrollto">
       <Link to={'/bookings'}>  Bookings</Link>
      </a>
      <a  className="book-a-table-btn scrollto" onClick={logout} style={{backgroundColor:"red"}}>
        Logout
        
      </a>
    </div>
  </header>
  </div>
  )
}

export default Header