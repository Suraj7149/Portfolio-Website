import React, { useEffect } from 'react'
import "./HireMe.css"
import insta from '../assets/insta_icon.png';
import link from "../assets/link_iconpng.png";
import white_circle from "../assets/circle_icon.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


const HireMe = () => {
  useEffect(() => {
    const split_hm = new SplitText(".hm_desc", {
          type: "lines, words, chars",
          mask: "lines"
        });
    const email = new SplitText(".email", {
          type: "lines, words, chars",
          mask: "lines"
        });
    const Copy = new SplitText(".Cr", {
          type: "lines, words, chars",
          mask: "lines"
    });

    gsap.fromTo(".hire_me_title",{
      y:30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.09,
      scrollTrigger: {
        trigger: ".hire_me_card",
        start: "top 80%",
        toggleActions: "play reset play reset",
      }
    }
  );

    gsap.fromTo(split_hm.chars,{
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".hire_me_card",
          start: "top center",
          toggleActions: "play reset play reset",
        }
      }
    );

    gsap.fromTo(".hm_contact_us",{
        y:30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.09,
        // delay: 2,
        scrollTrigger: {
          trigger: ".hire_me_card",
          start: "top 30%",
          toggleActions: "play reset play reset",
        }
      }
    );

    gsap.fromTo(email.chars,{
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: ".hire_me_card",
          start: "top 15%",
          toggleActions: "play reset play reset",
        }
      }
    );
    gsap.fromTo(".outro_icon",{
        y:30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: ".hire_me_card",
          start: "top 10%",
          toggleActions: "play reset play reset",
        }
      }
    );
    gsap.fromTo(Copy.chars,{
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: ".hire_me_card",
          start: "top 5%",
          toggleActions: "play reset play reset",
        }
      }
    );

    


    return () => split_hm.revert();

   });

  // useEffect(() => {
  //   const split = new SplitText(".hm_desc", {
  //     type: "lines, words, chars",
  //     mask: "lines"
  //   });
    
  //   gsap.fromTo(split.words,{
  //     y: 100,
  //     opacity: 0,
  //   },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     duration: 1.5,
  //     ease: "power2.out",
  //     stagger: 0.09,
  //     scrollTrigger: {
  //       trigger: ".hire_me_card",
  //       start: "top center",
  //       toggleActions: "play reset play reset",
  //     }
  //   }
  // );

  //   return () => split.revert();
  // }, []);




  return (
    <div className='hire_me_section'>
      <div className="hire_me_card">

        <div className="hire_me_title">
          <img src={white_circle} alt="" />
          <a href="" className="title_tag">HIRE ME</a>
          <img src={white_circle} alt='' />
        </div>

        <h1 className="hm_desc">A new day for your business starts <br />
          with a better website <br />
          Let’s make it happen.</h1>
        
      <a className="hm_contact_us" href="">Contact Us</a>

      <div className="outro_info">
        <h3 className='email'>suraj.gupta7149@outlook.com</h3>
        <div className="outro_icon">
          <img src={insta} alt="" />
          <img src={link} alt="" />
        </div>
        <h3 className='Cr'>COPYRIGHT@2025 SURAJ</h3>
      </div>
      </div>
    </div>
  )
}

export default HireMe
