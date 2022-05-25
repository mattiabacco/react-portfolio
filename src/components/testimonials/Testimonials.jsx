import React from 'react'
import './testimonials.css'
import CL1 from '../../assets/DSC02314-2.jpg'
import CL2 from '../../assets/DSC04991-1.jpg'
import CL3 from '../../assets/DSC02314.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: CL1,
    client_name: 'Andrea',
    client_review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At blanditiis sit voluptatibus, culpa soluta sed esse nulla vitae ducimus ex et ratione. Quod ab aspernatur nesciunt molestiae qui facere ratione!'
  },
  {
    id: 2,
    image: CL2,
    client_name: 'Pibu',
    client_review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At blanditiis sit voluptatibus, culpa soluta sed esse nulla vitae ducimus ex et ratione. Quod ab aspernatur nesciunt molestiae qui facere ratione!'
  },
  {
    id: 3,
    image: CL3,
    client_name: 'Andrea3',
    client_review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At blanditiis sit voluptatibus, culpa soluta sed esse nulla vitae ducimus ex et ratione. Quod ab aspernatur nesciunt molestiae qui facere ratione!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
        {
          data.map(({id,image,client_name,client_review}) => {
            return(
              <SwiperSlide key={id} className='testimonial__item'>
                <div className="client__avatar">
                  <img src={image} alt="" />
                </div>
                <h5 className='client__name'>{client_name}</h5>
                <small className="client__review">{client_review} </small>          
              </SwiperSlide>   
            )
          })
        }
            
      
      </Swiper>
    </section>
  )
}

export default Testimonials