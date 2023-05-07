import React from 'react'

const Gallery = () => {
  return (
    <div 
    style={{ background:"black"
}}
    //  style={{ backgroundImage: "url(img/slide/)"  }}
     >
<section id="gallery" className="gallery">
    <div className="container-fluid">
      <div className="section-title">
        <h2>
         <br/><br/><f>Some photos from</f> <span>Our Temple</span>
        </h2>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="row g-0">
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="img/images/temple.jpg"
              className="gallery-lightbox"
            >
              <img
                src="img/images/temple.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="img/images/temple2.jpg"
              className="gallery-lightbox"
            >
              <img
                src="img/images/temple2.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
            <a
              href="img/images/kuri.jfif"
              className="gallery-lightbox"
            >
              <img
                src="img/images/kuri.jfif"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  </div>
  )
}

export default Gallery