import React from 'react'
import { Link } from 'react-router-dom'

const Headerstaff = () => {
  return (
    <div><header
    id="header"
    className="fixed-top d-flex align-items-center header-transparent"
  >
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <div className="logo me-auto">
        <h1>
          <a href="index.html">
            <c>Sree</c> Vaisravana Temple
          </a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
      </div>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          {/* <li className="dropdown">
            <a href="#">
              <span>
                Panchangam
                <br /> Calendar
              </span>{" "}
              <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Add Calendar</a>
              </li>
              <li>
                <a href="#">View Calendar</a>
              </li> */}
              {/* <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li> */}
            {/* </ul>
          </li> */}
          <li className="dropdown">
            <a href="#">
              <span>Poojas</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href=""><Link to={'/viewpoojastaff'} >Poojas</Link></a>
              </li>
              <li>
                <a href=""><Link to={'/addpooja'} >Add Poojas</Link></a>
              </li>
              {/* <li>
                <a href="#">Scheduled pooja</a>
              </li> */}
              {/* <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li> */}
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href=""> 
            <Link to={'/stafdon'}>Donation</Link>
              
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href=""> 
            <Link to={'/scheduledstaf'}>Scheduled pooja</Link>
              
            </a>
          </li>
          {/* </li><li><a class="nav-link scrollto" href="#chefs">Notification</a></li> */}
          {/* <li className="dropdown">
            <a href="#">
              <span>Income</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href=""><Link to={'/stafinco'} >Add</Link></a>
              </li>
              <li>
                <a href=""><Link to={'/stafincoview'}>View</Link> </a>
              </li>
            </ul>
          </li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <a href="" className="book-a-table-btn scrollto">
        <Link to={'/stafbook'}>Schedule a Pooja</Link>
        
      </a>
    </div>
  </header>
  </div>
  )
}

export default Headerstaff