import React, { useEffect, useState } from 'react'
import { IconMenu, IconMoon } from '@tabler/icons-react'
import { Link, NavLink } from 'react-router-dom'
import MyModal from './MyModal'
import { useSelector } from 'react-redux'
import UserDropdown from './UserDropdown'

const Header = () => {
    const loading = useSelector(state => state.auth.loading)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 100; // Change 100 to your desired scroll position
        setScrolled(isScrolled);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
  return (
    <div className={`relative header transition-all duration-500 ${scrolled ? 'backdrop-blur-md' : ''} `}>
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
              {!isAuthenticated ?
                <MyModal/>
                :
                <UserDropdown/>
              }
          </ul>
        </nav>
        {loading &&
        <div className='absolute bottom-0 left-0 bg-red-600 bg-opacity-10 -mb-1 w-full h-1 universalLoader'>
          <span></span>
        </div>
        }
    </div>
  )
}

export default Header