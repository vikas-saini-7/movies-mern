import React from 'react'
import CarouselSlide from './CarouselSlide'

const Data = [
    {
        id: 1,
        img: 'https://wallpapers.com/images/hd/your-name-background-nplwq35kp9p4gmne.jpg',
        title: 'Title',
        description: 'lorem ipsum gypsum',
        rating: 7,
        tags: ["tag 1", "tag 2"],
    }
]

const MyCarousel = () => {
  return (
    <div className=''>
        {Data.map((item) => (
            <CarouselSlide key={item.id} slide={item} />
        ))}
    </div>
  )
}

export default MyCarousel