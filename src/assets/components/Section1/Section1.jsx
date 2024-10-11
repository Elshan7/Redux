import React from 'react'
import "./section1.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section1 = () => {
  return (
    <section className='sct1'>

<Carousel fade>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg" alt="" />
        <Carousel.Caption>
        <div className="slide-container">
        <div className="slide-text">
        <span className='span-fashion'>Fashion Sale</span>
          <h2 className='slide-h2'>Minimal Menz Style</h2>
          <p className='slide-p'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
          <button className='slide-btn'>Shop Now</button>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp" alt="" />
       
        
        <Carousel.Caption className='caption2'>
        <div className="slide-text">
        <span className='span-fashion'>Fashion Sale</span>
          <h2 className='slide-h2'>Minimal Menz Style</h2>
          <p className='slide-p'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
          <button className='slide-btn'>Shop Now</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
     
    </section>
  )
}

export default Section1
