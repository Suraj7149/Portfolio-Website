import React, {useState, useRef, useEffect, use} from 'react'
import './About.css'
import circle2 from '../assets/black_circle_abour_me.png';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  // Heading & Description Animation
  // working version 
  useEffect(() => {

    document.fonts.ready.then(() => {
      const heading1 = new SplitText(".heading1", {
        type: "words, chars",
        mask: "lines"
      });
      const heading2 = new SplitText(".heading2", {
        type: "words, chars",
        mask: "lines"
      });
      const split = new SplitText(".desc1", {
        type: "words, chars",
        mask: "lines"
      });
      const split2 = new SplitText(".desc2", {
        type: "words, chars",
        mask: "lines"
      });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_me",
        start : "top 35%",
        end: "+=700",   
        scrub: 0.5,      
        // scrub: true,
        // pin: true,            // <--- REQUIRED
        pinSpacing: true,
        // markers: true,
        toggleActions: "play none restart reverse",
        
      },
    });

    const tl_heading = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_me",
        start : "top 45%",
        end: "+=600",   
        scrub: 0.5,      
        // scrub: true,
        // pin: true,            // <--- REQUIRED
        pinSpacing: true,
        // markers: true,
        toggleActions: "play none restart reverse",
        
      },
    });

    tl_heading.from(heading1.words, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power2.out",
    }, );

    tl_heading.to(heading1.words, {
      y: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 1,
      ease: "power2.out",
    }, );

    tl_heading.to(heading1.words, {
      y: -40,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power2.out",
    }, );

    tl_heading.from(heading2.words, {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power2.out",
    }, "pane2");

    tl.to(heading2.words, {
      y: 0,
      opacity: 0,
      stagger: 0.08,
      duration: 1,
      ease: "power2.out",
    }, );

    tl.from(split.words, {
      y: 30,
      opacity: 0,
      stagger: 0.06,
      duration: 1,
      ease: "power2.out",
    }, );

    tl.to(split.words, {
      y: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 1,
      ease: "power2.out",
    }, );

    tl.to(split.words, {
      y: -30,
      opacity: 0,
      stagger: 0.06,
      duration: 1,
      ease: "power2.out",
    }, );

    tl.from(split2.words, {
      y: 30,
      opacity: 0,
      stagger: 0.06,
      duration: 1,
      ease: "power2.out",
    }, );

    tl.to(split2.words, {
      y: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 1,
      ease: "power2.out",
    }, );


    // return () => split.revert();
    });

  }, []);


  // About Me Title animation
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
          <div className="heading1">
            Bringing <span>Warmth,</span> Clarity & <br />
            <span>Structure </span>to the <span>Web</span>
          </div>
          <div className="heading2">
            Hello! I’m <span>Suraj</span> <br />
            Your <span>Front-End Partner</span>
          </div>
        </h1>

        <h3 className='about_me_desc'>
          <div className="desc1">
            Just like a sunrise sets the tone for the day, a well-designed <br />
            website sets the tone for your business.
            <span> I build modern front- <br />end experiences that feel bright, balanced, and easy to use. <br /> Crafted with clean UI, smooth interactions, and strong technical <br />foundations.</span>
          </div>
          <div className="desc2">
              With experience in React, ES6+, Tailwind, Node.js, SQL, Git, <br />Redux, and Figma, I help businesses turn ideas into reliable <br />digital products that look great, run smoothly, and scale for <br />the future.
          </div>
        </h3>

    </div>
  )
}

export default About
