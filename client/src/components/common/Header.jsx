import React from 'react'
import { IconMenu, IconMoon } from '@tabler/icons-react'
import { Link, NavLink } from 'react-router-dom'
import MyModal from './MyModal'

const Header = () => {
  return (
    <div className='header'>
        <div className='flex items-center gap-6'>
            <h1 className='font-black text-primary text-3xl'>DarkFlix</h1>
            <ul className='flex items-center gap-4 text-md font-semibold uppercase'>
                <NavLink to='/'>
                    <li className='active'>Home</li>
                </NavLink>
                <NavLink to='movies'>
                    <li>Movies</li>
                </NavLink>
                <NavLink to='/tv-series'>
                    <li>TV Series</li>
                </NavLink>
                <NavLink to='/search'>
                    <li>Search</li>
                </NavLink>
                <li className='cursor-pointer'>
                    <IconMoon size={22}/>
                </li>
            </ul>
        </div>
        <nav>
        <ul>
            {/* <li className='cursor-pointer'>
                <IconMenu/>
            </li> */}
            {/* <div className='cursor-pointer button'>
                Sign In
            </div> */}
            <MyModal/>
        </ul>
        </nav>
    </div>
  )
}

export default Header