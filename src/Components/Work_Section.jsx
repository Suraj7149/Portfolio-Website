import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./work.css"
import image1 from "../assets/work_section_arrow.png";
import image2 from "../assets/work_section_arrow2.png";
import image3 from  "../assets/work_sec_card_arrow.png";
import circle2 from '../assets/black_circle_abour_me.png';
import Dilli_restaurant from '../assets/Dilli_restaurant.png';
import Zentry from "../assets/Zentry.png";
import Mojito from "../assets/Mojito.png";
import Portfolio from "../assets/Portfolio.png";
import coming_soon from "../assets/comingsoon.png";

gsap.registerPlugin(useGSAP);

const Work = () => {
    const cardHolder = useRef(null);
    const tl = useRef(null)

    const handleClick = (link) =>{
        window.open(link, "_blank");
    }

    useEffect(()=>{
        tl.current =gsap.timeline({repeat: -1})
        .to(cardHolder.current, {
            x: "-140%",
            duration: 12,
            ease: "linear",
        })

        return() => tl.current.kill();
    }, []);

    const slowDown = () => {
        gsap.to(tl.current, {
            timeScale: 0.5,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const speedUp = () => {
        gsap.to(tl.current, {
            timeScale: 1,
            duration: 0.4,
            ease: "power2.out",
        });
    };
    
  return (
    <div className='work_section'>
        <div className="work_section_heading">
            <img src={circle2} alt="" />
            <a href="" className="title_tag">WORK</a>
            <img src={circle2} alt="" />
        </div>

        <h1>Recent Projects</h1>
        <h2>A curated selection of websites and interfaces I’ve built.</h2>

        <div className="work_arrows">
            <img src={image2} alt="" />
            <img src={image1} alt="" />
        </div>

        <div className="card_display">
            <div 
                ref={cardHolder}
                className="cards_holder"
                onMouseEnter={slowDown}
                onMouseLeave={speedUp}
            >
                <div className="card dilli" onClick={() => {handleClick("https://htmlcssrestaurantdemo.netlify.app/")}}>
                <img src={Dilli_restaurant} alt="" />

                <label className='dilli' htmlFor="">
                    Dilli <br /> Restaurant
                </label>
                </div>

                <div className="card" onClick={() => {handleClick("https://awwwardsclonezentry.netlify.app/")}}>
                    <img src={Zentry} alt="" />
                    
                    <label className='Zentry' htmlFor="">
                        Zentry <br /> Clone
                    </label>
                </div>

                <div className="card" onClick={() => {handleClick("https://velvetpour7149.netlify.app/")}}>
                    <img src={Mojito} alt="" />
                    
                    <label className="Mojito" htmlFor="">
                        Velvet Pour <br /> Mojito
                    </label>
                </div>    

                <div className="card" onClick={() => {handleClick("https://protfoliowebsitesuraj.netlify.app/")}}>
                    <img src={Portfolio} alt="" />
                    
                    <label className="Portfolio" htmlFor="">
                        Portfolio <br /> Website
                    </label>
                </div>

                <div className="card" onClick={() => {handleClick("https://buildingdesignerswebsite.netlify.app/")}}>
                    <img src={coming_soon} alt="" />
                    
                    <label className="showcase" htmlFor="">
                        Showcase  <br /> Website
                    </label>
                </div> 

                <div className="card dilli" onClick={() => {handleClick("https://htmlcssrestaurantdemo.netlify.app/")}}>
                <img src={Dilli_restaurant} alt="" />

                <label className='dilli' htmlFor="">
                    Dilli <br /> Restaurant
                </label>
                </div>

                <div className="card" onClick={() => {handleClick("https://awwwardsclonezentry.netlify.app/")}}>
                    <img src={Zentry} alt="" />
                    
                    <label className='Zentry' htmlFor="">
                        Zentry <br /> Clone
                    </label>
                </div>

                <div className="card" onClick={() => {handleClick("https://velvetpour7149.netlify.app/")}}>
                    <img src={Mojito} alt="" />
                    
                    <label className="Mojito" htmlFor="">
                        Velvet Pour <br /> Mojito
                    </label>
                </div>    

                <div className="card" onClick={() => {handleClick("https://protfoliowebsitesuraj.netlify.app/")}}>
                    <img src={Portfolio} alt="" />
                    
                    <label className="Portfolio" htmlFor="">
                        Portfolio <br /> Website
                    </label>
                </div>

                <div className="card" onClick={() => {handleClick("https://buildingdesignerswebsite.netlify.app/")}}>
                    <img src={coming_soon} alt="" />
                    
                    <label className="showcase" htmlFor="">
                        Showcase  <br /> Website
                    </label>
                </div> 

            </div>
        </div>
      
    </div>
  )
}

export default Work
