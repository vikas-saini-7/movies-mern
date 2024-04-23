import React from 'react'
import '../../styles/landing.scss'

const LandingPage = () => {
  return (
    <div className='landing overflow-hidden'>
        <div className='bg-images'>
          <img className='bg-1' src="/images/bg1.svg" alt="" />
          <img className='bg-2' src="/images/bg1.svg" alt="" />
        </div>

        <div className='header'>
          <div>
            <h1 className='font-bold text-primary text-xl'>DarkFlix</h1>
          </div>
          <nav>
            <ul>
              <li>Contact</li>
            </ul>
          </nav>
        </div>

        <div className='hero text-center'>
            <h1 className='uppercase font-black'>
                <div className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Browse & Explore</div>
                <div className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Movies</div>
            </h1>
            <p className='text-white-secondary italic'>#LikeNeverBefore</p>
        </div>
        <div className='text-center'>
          <button className='btn'>Explore Now</button>
        </div>
    </div>
  )
}

export default LandingPage
