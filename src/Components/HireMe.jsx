import React from 'react'
import "./HireMe.css"
import insta from '../assets/insta_icon.png';
import link from "../assets/link_iconpng.png";
import white_circle from "../assets/circle_icon.png";


const HireMe = () => {
  return (
    <div className='hire_me_section'>
      <div className="hire_me_card">
        <div className="hire_me_title">
          <img src={white_circle} alt="" />
          <a href="" className="title_tag">HIRE ME</a>
          <img src={white_circle} alt='' />
        </div>
        <h1>Lorem ipsum dolor sit <br />
            amet consectetur adipiscing elit</h1>
        
      <a className="hm_contact_us" href="">Contact Us</a>

      <div className="outro_info">
        <h3 className='email'>suraj.gupta7149@outlook.com</h3>
        <div className="outro_icon">
          <img src={insta} alt="" />
          <img src={link} alt="" />
        </div>
        <h3>COPYRIGHT@2025 SURAJ</h3>
      </div>
      </div>
    </div>
  )
}

export default HireMe
