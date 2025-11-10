import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_content">
            
            <nav className='navbar'>
                <a href="">label</a>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Work</li>
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
