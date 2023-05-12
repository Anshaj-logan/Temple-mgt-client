import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Hearderpub = () => {

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
            <a className="nav-link scrollto active" href=""><Link to={'/'}>
              Home</Link>
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="login">
           Login 
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#chefs">
              Poojas
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Explore</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href=""><Link to={'/gallery'}>Gallery</Link> </a>
              </li>
              {/* <li>
                <a href=""><Link to={'/contact'}> Contact Us</Link></a>
              </li> */}
              <li>
                <a href="/about"> About</a>
              </li>
            </ul>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <a href="/register" className="book-a-table-btn scrollto">
       Register 
      </a>
      
    </div>
  </header>
  </div>
  )
}

export default Hearderpub