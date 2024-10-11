import React from 'react'
import "./Section2.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';




const Section2 = () => {
    return (
        <section className='sct2'>

            <div className="sct2-container-up">
                <div className="nav-up">
                    <h2 className='nav-h2'>Trending This Week</h2>
                    <div className="nav-tab">
                        <a className='tab-a first-tab' href="">Men</a>
                        <a className='tab-a' href="">Women</a>
                        <a className='tab-a' href="">Baby</a>
                        <a className='tab-a' href="">Fashion</a>
                    </div>

                </div>
            </div>

            <div className="sct2-container-down">

            <Carousel className='slide-carousel'
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
    >
      <Carousel.Slide>
        <img className='slide-pic' src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg" alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
      <img className='slide-pic' src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg" alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img className='slide-pic' src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg" alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
            <img className='slide-pic' src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg" alt="" />
        </Carousel.Slide>
        <Carousel.Slide>
            <img className='slide-pic' src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg" alt="" />
        </Carousel.Slide>
   
    </Carousel>

          
            </div>

        

        </section>
    )
}

export default Section2
