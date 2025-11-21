import React from 'react'
import "./work.css"
import image1 from "../assets/work_section_arrow.png";
import image2 from "../assets/work_section_arrow2.png";
import image3 from  "../assets/work_sec_card_arrow.png";

const Work = () => {
  return (
    <div className='work_section'>
        <div className="heading3">
            <div className="circle3"></div>
            <a href="" className="title_tag">WORK</a>
            <div className="circle3"></div>
        </div>

        <h1>Recent Projects</h1>
        <h2>A curated selection of websites and interfaces <br />
            I’ve built—each crafted with attention to detail, <br />
            performance, and a bright, user-friendly experience.</h2>

        <div className="work_arrows">
            <img src={image2} alt="" />
            <img src={image1} alt="" />
        </div>

        <div className="card_display">
            <div className="card">
                <img src={image3} alt="" />

                <label htmlFor="">
                    WEB <br /> DEVELOPMENT
                </label>
            </div>

            <div className="card">
                <img src={image3} alt="" />
                
                <label htmlFor="">
                    WEB <br /> DEVELOPMENT
                </label>
            </div>

            <div className="card">
                <img src={image3} alt="" />
                
                <label htmlFor="">
                    WEB <br /> DEVELOPMENT
                </label>
            </div>    

            <div className="card">
                <img src={image3} alt="" />
                
                <label htmlFor="">
                    WEB <br /> DEVELOPMENT
                </label>
            </div>

            <div className="card">
                <img src={image3} alt="" />
                
                <label htmlFor="">
                    WEB <br /> DEVELOPMENT
                </label>
            </div>     

        </div>
      
    </div>
  )
}

export default Work
