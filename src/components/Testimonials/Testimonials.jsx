import React from 'react';
import './Testimonials.css';
import testimonials from "../../assets/testimonials.png";

import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';


const data = [
    {
        avatar: testimonials,
        name: "Edward Newgate",
        position: "Founder Circle",
        paragraph: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
        avatar: testimonials,
        name: "Edward Newgate",
        position: "Founder Circle",
        paragraph: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
        avatar: testimonials,
        name: "Edward Newgate",
        position: "Founder Circle",
        paragraph: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
    {
        avatar: testimonials,
        name: "Edward Newgate",
        position: "Founder Circle",
        paragraph: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    },
]

const Testimonials = () => {
  return (
    <section className="app__testimonials app__wrapper section__padding" id="testimonials">
        <Swiper className='app__testimonials_container'
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination= {true}
        navigation= {true}
        >
            {data.map(({avatar, name, position, paragraph}, index) =>{
                return(
                    <SwiperSlide key={index} className="testimonial">
                            <h1 className='headtext__mulish'>What our customer are saying</h1>
                            <hr></hr>
        
                            <div className='client_avatar'>
                                <img src={avatar} alt="avatar" />
                                <div className='client_information'>
                                <h5>{name}</h5>
                                <small>{position}</small>
                                </div>
                            </div>
                            <div className='client_testimonial'>
                                <p>{paragraph}</p>
                            </div>
                        
                    </SwiperSlide>

                );
        })}
            
            
        </Swiper>
    </section>

    
  )
}

export default Testimonials