import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const SectionSwiper = ({data}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
    >
      {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='h-[400px] lg:h-[480px] bg-cover' style={{backgroundImage:`url(${baseUrl}${item?.poster_path})`, backgroundOrigin:'center'}}>
              {/* <p>{item.title}</p>
              <p>{item.vote_count}</p> */}
            </div>
          </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SectionSwiper