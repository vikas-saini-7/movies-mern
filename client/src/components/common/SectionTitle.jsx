import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='relative mt-24 mb-8'>
        <h1 className='text-3xl font-bold uppercase'>{title}</h1>
        <span className='absolute -bottom-2 left-0 w-[120px] h-[5px] bg-red-600'></span>
    </div>
  )
}

export default SectionTitle