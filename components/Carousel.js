
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <>
        <div className="w-full lg:w-full max-w-md lg:mx-w-xl  border-l-8 border-t-8 border-red-400 rounded-xl place-self-center   mx-auto ">
      <Swiper
        modules={[Pagination, Autoplay,EffectFade]}
        effect="fade" 
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        speed={2500}
        fadeEffect={{ crossFade: true }}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img src="/section3img3.jpg" alt="Slide 1" className="w-full h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/section3img2.jpg" alt="Slide 2" className="w-full h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/section3img1.jpg" alt="Slide 3" className="w-full h-80 object-cover" />
        </SwiperSlide>
        
      </Swiper>
    </div>
        
      
    </>
  )
}

export default Carousel
