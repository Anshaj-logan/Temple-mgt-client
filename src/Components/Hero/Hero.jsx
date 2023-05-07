import React from 'react'
import Carousel from '../Carousel'

const Hero = () => {
  return (
    <div><section id="hero">
    <div className="hero-container">
      <div
        id="heroCarousel"
        data-bs-interval={3000}
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators" id="hero-carousel-indicators" />
        <Carousel/>
       
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero