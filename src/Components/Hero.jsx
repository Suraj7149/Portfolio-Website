import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_content">
            
            <nav className='navbar'>
                <a href="">label</a>
                <ul>
                    <li className='item active'>
                        <div className='circle'></div>
                        Home
                    </li>
                    <li className='item'><div className='circle'></div>About</li>
                    <li className='item'><div className='circle'></div>Service</li>
                    <li className='item'><div className='circle'></div>Work</li>
                </ul>
            </nav>
            
        </div>
      <div className="video">
        <div className="overlay"></div>
        <button className="contact_us">
                Contact Us
        </button>
      </div>
    </div>
  )
}

export default Hero
