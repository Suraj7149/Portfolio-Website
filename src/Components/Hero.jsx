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

        <div className='discription'>
            <div className="desc_text">
                <h1>
                    Lorem ipsum <br />
                    dolor sit amet.
                </h1>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                    Nullam id feugiat libero.
                </h3>

            </div>
            

            <div className='learn_more'>
                <h3>Learn More</h3>
                <img src="./src/assets/arrow_with_circle.png" alt="" />
            </div>

            <div className="Explore_more">
                <h3 className='Explore_more_text'>
                    Explore a wide portfolio <br />
                    of my works
                </h3>
        </div>
        </div>

        
            
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
