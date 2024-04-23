import React from 'react'
import CircularProgress from './CircularProgress';
import { IconPlayerPlay } from '@tabler/icons-react';

const CarouselSlide = ({slide}) => {
  const {img, title, description, rating, tags} = slide;
  return (
    <div className='relative bg-cover pt-14' style={{backgroundImage:`url(${img})`}}>
      <div style={{backgroundImage: "linear-gradient(to top, #0C0C0C, rgba(0,0,0,0))"}} className='absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50'></div>
      <div className='relative py-28 lg:py-48 px-[10%]'>
        <div className='flex flex-col gap-8 max-w-[400px]'>
          <h1 className='text-5xl lg:text-7xl font-bold'>{title}</h1>
          <div className='flex gap-2 items-center'>
            <p className='w-12 h-12 flex items-center justify-center mr-2 text-lg font-bold'>{rating}</p>
            {/* <CircularProgress value={4} /> */}
            {tags.map((item) => (
              <p className='bg-primary rounded-full px-5 py-2 text-sm'>{item}</p>
            ))}
          </div>
          <p className='text-lg'>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, eveniet! </p>
          <button className='button button-large w-fit flex items-center gap-2'> <IconPlayerPlay/> Watch Now</button>
        </div>
      </div>
    </div>
  )
}

export default CarouselSlide