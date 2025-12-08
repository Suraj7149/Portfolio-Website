import React, {useState, useRef, useEffect, use} from 'react'
import './About.css'
import circle2 from '../assets/black_circle_abour_me.png';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {

  // Heading Animation
  useEffect(() => {
  const split = new SplitText(".about_me_heading", {
    type: "words, chars",
    mask: "lines"
  });

  gsap.from(split.words, {
    y: 100,
    opacity: 0,
    stagger: 0.08,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about_me_heading",
      start: "top 75%",
      toggleActions: "play none restart reverse"
    }
  });

  return () => split.revert();
  }, []);


  
  // Description Animation
  useEffect(() => {
  const split = new SplitText(".about_me_desc", {
    type: "words, chars",
    mask: "lines"
  });

  gsap.from(split.words, {
    y: 100,
    opacity: 0,
    stagger: 0.06,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about_me",
      start: "top 35%",
      toggleActions: "play none restart reverse"
    }
  });

  return () => split.revert();
  }, []);

  // TItle animation
  useEffect(() => {
    gsap.fromTo(".heading",
      { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
      toggleActions: "play none restart reverse"
      }
    }
  );
  }, []);


  return (
    <div className='about_me'>
        <div className="heading">
            <img src={circle2} alt="" className='about_me_circle' />
            <a href="" className="title_tag">ABOUT ME</a>
            <img src={circle2} alt="" className='about_me_circle'/>
        </div>    
        <h1 className='about_me_heading'>
            Bringing <span>Warmth,</span> Clarity & <br />
            <span>Structure </span>to the <span>Web</span>
        </h1>
        <h3 className='about_me_desc'>
            Just like a sunrise sets the tone for the day, a well-designed <br />
            website sets the tone for your business.
            <span> I build modern front- <br />end experiences that feel bright, balanced, and easy to use. <br /> Crafted with clean UI, smooth interactions, and strong technical <br />foundations.</span>
        </h3> 
    </div>
  )
}

export default About
