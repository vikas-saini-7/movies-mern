import React from 'react'
import CarouselSlide from './CarouselSlide'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const MyCarousel = ({data, usedFor}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
        {data.map((item)=>(
          <SwiperSlide>
            <CarouselSlide usedFor={usedFor} key={item.id} slide={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default MyCarousel