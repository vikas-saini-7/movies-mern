import React, { useEffect, useState } from 'react';
import { POP_MOVIES } from '../../constants';
import { Link } from 'react-router-dom';
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const SearchPage = () => {
  const [activeItem, setActiveItem] = useState('Movie');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className='container mx-auto px-4 pt-14'>
      <div className='flex items-center justify-center gap-4 uppercase mt-8'>
        <p
          className={`cursor-pointer px-4 py-2 rounded ${activeItem === 'Movie' ? 'bg-primary bg-opacity-20' : ''}`}
          onClick={() => handleItemClick('Movie')}
        >
          Movie
        </p>
        <p
          className={`cursor-pointer px-4 py-2 rounded ${activeItem === 'Tv' ? 'bg-primary bg-opacity-20' : ''}`}
          onClick={() => handleItemClick('Tv')}
        >
          Tv
        </p>
        <p
          className={`cursor-pointer px-4 py-2 rounded ${activeItem === 'People' ? 'bg-primary bg-opacity-20' : ''}`}
          onClick={() => handleItemClick('People')}
        >
          People
        </p>
      </div>
      <div className='mb-8 mt-8'>
        <input className='border bg-transparent border-gray-500 border-opacity-20 w-full h-[50px] rounded-lg px-4 text-lg' type="text" placeholder='Search DarkFlix' />
      </div>
      <div className='min-h-[500px] gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {POP_MOVIES.map((item) => (
          <div className='relative group overflow-hidden' key={item.id}>
              <div className='h-[400px] lg:h-[480px] bg-cover' style={{backgroundImage:`url(${baseUrl}${item?.poster_path})`, backgroundOrigin:'center'}}></div>
              <div className='bg-gradient-to-t bg-opacity-10 from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-4 py-4 bottom-0 md:-bottom-32 left-0 group-hover:bottom-0 transition-all duration-300'>
                <p className='text-lg'>{item?.release_date.split('-')[0]}</p>
                <p className='font-bold'>{item?.title}</p>
              </div>
              <div className='flex transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex-col text-center items-center justify-center w-full h-full'>
                <Link to={`/movie/${item.id}`}>
                  <div className='relative px-6 py-2 bg-primary rounded-lg -mt-8'><IconPlayerPlayFilled size={18}/></div>
                </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
