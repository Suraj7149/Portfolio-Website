import React, {useState, useRef, useEffect, use} from 'react'
import './Hero.css'
import arrow from '../assets/arrow_with_circle.png';
import circle from '../assets/Picture1.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  useGSAP(() => {
    gsap.set(".Explore_more", {opacity: 0,});
  })

  // GSAP Animation for Navbar Indicator
  useGSAP(() => {
    gsap.to(".activated", {
      left: 25 * (selectedItem - 1) + "%",
      duration: 0.3,
      ease: "back.out",
    });
  }, [selectedItem]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  // GSAP Animation for Hero Description
  useEffect(() => {
    const split = new SplitText(".hero_heading", {
      type: "lines, words, chars",
      mask: "lines"
    });
    
    gsap.fromTo(
    split.words,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.09,
      scrollTrigger: {
        trigger: ".hero_heading",
        start: "top 80%",
        toggleActions: "play reset play reset",
      }
    }
  );

    return () => split.revert();
  }, []);

  useEffect(() => {
    const split = new SplitText(".hero_desc", {
      type: "lines, words, chars",
      mask: "lines"
    });
    
    gsap.fromTo(
    split.words,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.09,
      scrollTrigger: {
        trigger: ".hero_desc",
        start: "top 80%",
        toggleActions: "play reset play reset",
      }
    }
  );

    return () => split.revert();
  }, []);

  // GSAP Animation for video and Contact Us Button
  useEffect(() => {
    gsap.fromTo(".vid", 
    { 
      opacity: 0,
      scale: 1,
      // borderRadius: "600px",
      x: "100%"
    }, 

    { 
      scale: 1, 
      duration: 1.5, 
      // borderRadius: "0px",
      x: "0%",
      opacity: 1,
      ease: "power2.out", 
      // stagger: 0.09

      

    }, 
  );

    // GSAP Animation for Contact Us Button
    gsap.fromTo(".contact_us", 
    { 
      opacity: 0,
      // scale: 0.7,
      // x: 400,
    }, 

    { 
      // scale: 1, 
      duration: 2.5, 
      // x: 0,
      opacity: 1,
      ease: "power2.out",

    });
  }, []);

  // GSAP Animation for Explore More
  useEffect(() => {
    gsap.fromTo(".Explore_more", 
    { 
      opacity: 0,
      width: "4%",
      // x: -400,
    }, 

    { 
      width: "42%",
      duration: 2.5, 
      // x: 0,
      opacity: 1,
      ease: "power2.out",

    });
    
  }, []);


  // GSAP Animation for navbar
  useEffect(() => {
    gsap.fromTo(".navbar", 
    { 
      opacity: 0,
      // width: "10%",
      // x: -400,
    }, 

    { 
      // width: "100%",
      duration: 2.5, 
      // x: 0,
      opacity: 1,
      ease: "power2.out",

    });
    
  }, []);
  

    
  return (
    <div className='hero'>
      <div className="hero_content">
            
        <nav className='navbar'>
                <a href="">label</a>
                <ul>
                    <span className='activated'><img src={circle} alt="" /></span>
                    <li className='item home' onClick={() => handleItemClick(1)}>Home</li>
                    <li className='item about' onClick={() => handleItemClick(2)}>About</li>
                    <li className='item service' onClick={() => handleItemClick(3)}>Service</li>
                    <li className='item work' onClick={() => handleItemClick(4)}>Work</li>
                </ul>
        </nav>

        <div className='discription'>
            <div className="desc_text">
                <h1 className='hero_heading'>
                    Building Bright <br />
                    Modern Web <br />
                    Experiences
                </h1>
                
                <h3 className='hero_desc'>Thoughtfully crafted websites and interfaces that feel smooth, <br />
                  responsive, and bring clarity to your online presence <br />
                  Just like a fresh sunrise for your brand.<br />
                </h3>                
            </div>
            
            <div className="Explore_more">
                <h3 className='Explore_more_text'>
                    Explore a wide portfolio <br />
                    of my works.
                </h3>
        </div>
        </div>      
 
      </div>

      <div className="video"> 
        <video 
        className='vid'
        src="https://cdn.pixabay.com/video/2023/03/08/153821-806526710_large.mp4" 
        autoPlay 
        loop 
        muted 
        
        />  
        <button className="contact_us">
            Contact Us
        </button>
      </div>
    </div>
  )
}

export default Hero
