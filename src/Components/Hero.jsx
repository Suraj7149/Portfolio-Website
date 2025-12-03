import React, {useState, useRef} from 'react'
import './Hero.css'
import arrow from '../assets/arrow_with_circle.png';
import circle from '../assets/Picture1.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); 

const Hero = () => {
   const [selectedItem, setSelectedItem] = useState(1);

  // Run GSAP whenever selectedItem changes
  useGSAP(() => {
    gsap.to(".activated", {
      left: 25 * (selectedItem - 1) + "%",
      duration: 1,
      ease: "power2.out",
    });
  }, [selectedItem]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
    
  return (
    <div className='hero'>
        <div className="hero_content">
            
            <nav className='navbar'>
                <a href="">label</a>
                <ul>
                    <span className='activated'><img src={circle} alt="" /></span>
                    <li className='item' onClick={() => handleItemClick(1)}>Home</li>
                    <li className='item' onClick={() => handleItemClick(2)}>About</li>
                    <li className='item' onClick={() => handleItemClick(3)}>Service</li>
                    <li className='item item4' onClick={() => handleItemClick(4)}>Work</li>
                </ul>
            </nav>

        <div className='discription'>
            <div className="desc_text">
                <h1>
                    Bright, Bold, and <br />
                    Purposeful Web Design
                </h1>
                <h3 className='hero_desc'>I create modern interfaces and seamless user experiences<br />
                    that help your business shine online.
                </h3>

            </div>
            

            <div className='learn_more'>
                <h3>Learn More</h3>
                <div className="arrow">
                    <img src={arrow} alt="arrow" />
                </div>
                
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
