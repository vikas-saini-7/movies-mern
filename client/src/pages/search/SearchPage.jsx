import React, { useState } from 'react';

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
      <div className='max-w-[800px] mx-auto'>
        <input className='mt-8 border bg-transparent border-gray-500 border-opacity-20 w-full h-[50px] rounded-lg px-4 text-lg' type="text" placeholder='Search DarkFlix' />
      </div>
      <div className='min-h-[500px]'></div>
    </div>
  );
};

export default SearchPage;
