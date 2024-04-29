import React from 'react'
import CarouselSlide from './CarouselSlide'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { POP_HERO } from '../../constants';

const MyCarousel = () => {
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
        {POP_HERO.map((item)=>(
          <SwiperSlide>
            <CarouselSlide key={item.id} slide={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default MyCarousel