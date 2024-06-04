import { IconHeartFilled } from '@tabler/icons-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-24 bg-gray-500 py-12 px-4 lg:px-8 bg-opacity-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div>
                <h1 className='font-black text-primary text-3xl text-center md:text-left'>DarkFlix</h1>
                <p>Browse Movies like never before</p>
            </div>
            <div>
                <p className='flex items-center'>Made with &nbsp;<span className='text-primary'> <IconHeartFilled /> </span>&nbsp; in India</p>
            </div>
        </div>
    </div>
  )
}

export default Footer