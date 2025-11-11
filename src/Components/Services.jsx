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
                <h1>Lorem Ipsumdo</h1>
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
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
                    sapien dui, molestie sed eleifend a, ornare ut ligula. Praesent <br />
                    vel tellus at sem iaculis pretium ut non turpis Maecenas <br />
                    scelerisque eget eros at commodo. Etiam commodo finibus erat.</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Services
