import React from 'react'

const Toolbar = () => {
  return (
    <div> <div
    id="topbar"
    className="d-flex align-items-center fixed-top "
  >
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <img src="img/download (1).jfif" id="logo" />
        {/* <i class="bi bi-phone d-flex align-items-center"><span>+91 9846759238</span></i> */}
        {/* <i class="bi bi-clock d-flex align-items-center ms-4"><span>5:00AM -7:00PM</span></i> */}
      </div>
      <div className="languages d-none d-md-flex align-items-center">
        {/* <ul>
      <li>En</li>
      <li><a href="#">De</a></li>
    </ul> */}
        <marquee>Cheriya Parappur Sree Vaisravana Temple, vettam</marquee>
      </div>
    </div>
  </div>
  
  
  </div>
  )
}

export default Toolbar