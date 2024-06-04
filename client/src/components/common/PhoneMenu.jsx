import { IconCross, IconHome, IconMoon, IconPictureInPicture, IconSearch, IconVideo, IconX } from '@tabler/icons-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const PhoneMenu = () => {
  return (
    <div className='w-full h-full bg-black p-4'>
        <ul className='flex flex-col items-cente gap-4 text-md font-semibold'>
            {/* <li className='cursor-pointer w-fit'>
                <IconX onClick={toggleDrawer}/>
            </li> */}
            <h1 className='font-black text-primary text-3xl'>DarkFlix</h1>
            <NavLink to='/'>
                <li className='active flex items-center gap-2'><IconHome/> Home</li>
            </NavLink>
            <NavLink to='movies'>
                <li className='active flex items-center gap-2'><IconVideo/>Movies</li>
            </NavLink>
            <NavLink to='/tv-series'>
                <li className='active flex items-center gap-2'><IconPictureInPicture/>TV Series</li>
            </NavLink>
            <NavLink to='/search'>
                <li className='active flex items-center gap-2'><IconSearch/>Search</li>
            </NavLink>
            <li className='cursor-pointer active flex items-center gap-2'>
                <IconMoon size={22}/> Theme
            </li>
        </ul>
    </div>
  )
}

export default PhoneMenu