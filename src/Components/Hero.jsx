import React, {useState, useRef, useEffect} from 'react'
import './Hero.css'
import arrow from '../assets/arrow_with_circle.png';
import circle from '../assets/Picture1.png';
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(SplitText) 

const Hero = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  // GSAP Animation for Navbar Indicator
  useGSAP(() => {
    gsap.to(".activated", {
      left: 25 * (selectedItem - 1) + "%",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [selectedItem]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  // GSAP Animation for Hero Description

  useEffect(() => {
    const split = new SplitText(".desc_text", {
      type: "lines, words",
      mask: "lines"
    });

    gsap.from(split.words, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.05
    });

    // cleanup: revert split on unmount
    return () => split.revert();
  }, []);

    
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
