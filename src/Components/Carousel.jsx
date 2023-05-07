import React from 'react'

const Carousel = () => {
  return (
    <>
    <div className="carousel-inner" role="listbox">
    {/* Slide 1 */}
    <div
      className="carousel-item active"
      style={{
        backgroundImage:
          "url(img/slide/traditional-south-indian-brass-oil-260nw-408508336.webp)"
      }}
    >
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">
            Cheriya <span>Parappur</span>
            <br />
            <span>Sree</span> Vaisravana Temple
          </h2>
          <p className="animate__animated animate__fadeInUp">
            <contact>Triprangode,Tirur(po), Malappuram 676102</contact>
          </p>
          <div>
            {/* <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
              <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a> */}
          </div>
        </div>
      </div>
    </div>
    {/* Slide 2 */}
    {/* <div
      className="carousel-item"
      style={{ backgroundImage: "url(img/slide/kuri.jfif)" }}
    >
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">
            Cheriya <span>Parappur</span>
            <br />
            <span>Sree</span> Vaisravana Temple
          </h2>
          <p className="animate__animated animate__fadeInUp">
            Triprangode,Tirur(po), Malappuram 676102
          </p>
          <div> */}
            {/* <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
              <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a> */}
          {/* </div>
        </div>
      </div>
    </div> */}
    {/* Slide 3 */}
    {/* <div
      className="carousel-item"
      style={{ backgroundImage: "url(assets/img/slide/images (1).jfif)" }}
    >
      <div className="carousel-container">
        <div className="carousel-content">
          <h2 className="animate__animated animate__fadeInDown">
            Cheriya <span>Parappur</span>
            <br />
            <span>Sree</span> Vaisravana Temple
          </h2>
          <p className="animate__animated animate__fadeInUp">
            Triprangode,Tirur(po), Malappuram 676102
          </p>
          <div> */}
            {/* <a href="#menu" class="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
              <a href="#book-a-table" class="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a> */}
          {/* </div>
        </div>
      </div>
    </div> */}
  </div>
  <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          />
        </a>
  </>
  )
}

export default Carousel