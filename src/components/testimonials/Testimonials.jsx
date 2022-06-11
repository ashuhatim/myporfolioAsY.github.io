import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";



const data = [
  {
    avatar:AVTR1,
    name: 'Time Snow',
    review: 'Very anthusiatic and eager to learn new things Have contributed nicely in multiple situations and on multiple requirements',
  },
  {
    avatar:AVTR2,
    name: 'Shat Wale',
    review: 'Very anthusiatic and eager to learn new things Have contributed nicely in multiple situations and on multiple requirements',
  },
  {
    avatar:AVTR3,
    name: 'Kwame Depiite',
    review: 'Very anthusiatic and eager to learn new things Have contributed nicely in multiple situations and on multiple requirements',
  },
  {
    avatar:AVTR4,
    name: 'McBrown',
    review: 'Very anthusiatic and eager to learn new things Have contributed nicely in multiple situations and on multiple requirements',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
       slidesPerView={1}
       spaceBetween={40}
       loop={true}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Pagination, Navigation]}
       className="container testimonials__container">
       { 
       data.map(({avatar,name,review},index) => { 
         return(
         
          <SwiperSlide key={index} className="testimonial">  
          <div className="client__avatar">
           <img src={avatar}/>
          </div>
          <h5 className="client__name">{name}</h5>
           <small className="client__review">{review}</small>
        </SwiperSlide>


         )
       })        
        
       }
      </Swiper>      
    </section>
  )
}

export default Testimonials