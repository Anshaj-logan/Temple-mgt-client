import React from 'react'
import { Link } from 'react-router-dom'

const Headeracc = () => {
  return (
    <div>
      <header
    id="header"
    className="fixed-top d-flex align-items-center "
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
            <a className="nav-link scrollto active" href=""><Link to={'/accounts'}>Home</Link>   
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href=""><Link to={'/month'}>Monthly<br/> Financial Report
            </Link>
              
            </a>
          </li>
          <li>
            <a className="nav-link scrollto active" href=""><Link to={'/daybkgen'}>Daybook</Link>   
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Income</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
            <li>
                <a href=""><Link to={'/accbooked'}>Pooja</Link> </a>
                <li>
            <a className="nav-link scrollto" href=""><Link to={'/accdon'}>Donation</Link>
              
            </a>
          </li>
              </li>
              <li>
                <a href=""><Link to={'/stafinco'} >Update</Link></a>
              </li>
            <li>
                <a href=""><Link to={'/stafincoview'}>Income</Link> </a>
              </li>
              
              
            </ul>
          </li>

            {/* <li class="dropdown"><a href="#"><span>Financial Report</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}


          <li className="dropdown">
            <a href="#">
              <span>Financial Report</span>{" "}
              <i className="bi bi-chevron-down" />
            </a>
            <ul>
            <li>
                <a href=""><Link to={'/daydate'}>Daybook</Link> </a>
              </li>
              <li> 
                <a href=""><Link to={'/monthdate'}>Monthly</Link>  </a>
              </li>
              <li>
                <a href=""><Link to={'/dateyear'}>Yearly</Link> </a>
              </li>
            </ul>
          </li>
          
          {/* <li className="dropdown">
            <a href="#">
              <span>Yearly<br/> Balancesheet</span>{" "}
              <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Generate</a>
              </li>
              <li>
                <a href="#">View</a>
              </li>
              <li>
                <a href="#">Edit</a>

              </li>
            </ul>
          </li> */}
          <li className="dropdown">
            <a href="#">
              <span>Expenses</span>{" "}
              <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href=""><Link to={'/addexpns'} >Add</Link></a>
              </li>
              <li>
                <a href=""><Link to={'/datexpense'}>View</Link> </a>
              </li>
            </ul>
          </li>
        </ul>
        {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
      </nav>
      {/* .navbar */}
      {/* <a href="#book-a-table" class="book-a-table-btn scrollto">Schedule a Pooja</a> */}
    </div>
  </header>
  </div>
  )
}

export default Headeracc