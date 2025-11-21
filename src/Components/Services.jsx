import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className='service_section'>
        <div className="title_display">
            <div className='service_tag'>
                <div className="circle2"></div>
                <h3>SERVICES</h3>
            </div>
            <div className="service_title">
                <h1>What I Can Do for You</h1>
            </div>
            <div className="services_heading">
                <ul>
                    <li className='active_service'>UI/UX Design</li>
                    <li>Web <br /> Development</li>
                </ul>
            </div>
            
            
        </div>
        <div className="content_display">
            <div className="content_box">
                <h3>Clean, intuitive layouts designed with purpose and focus on <br />
                    structuring information clearly, creating visually bright  <br />
                    interfaces, and crafting user flows that feel natural. <br />
                    Every design choice is guided by usability and your <br />
                    brand’s personality—no clutter, no confusion.</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Services
