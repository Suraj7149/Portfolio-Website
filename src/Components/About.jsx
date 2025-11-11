import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about_me'>
        <div className="heading">
            <div className="circle1"></div>
            <a href="" className="title_tag">ABOUT ME</a>
            <div className="circle1"></div>
        </div>
        

        <h1>
            Lorem ipsum <span>dolor</span>  sit amet <br />
            <span>consectetur</span> adipiscing elit. <span>Quisque</span>
        </h1>
        <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Quisque sed neque ac <span>sapien sollicitudin molestie et ac lectus. <br />
            Proin id neque fermentum, finibus felis eget, tristique tortor. <br />
            Suspendisse vulputatearcu eu lectus dapibus consectetur. <br />
            Nullam tincidunt accumsan sapien eget dictum.</span>
        </h3>

      
    </div>
  )
}

export default About
