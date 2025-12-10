import React, { useRef, useState } from 'react'
import "./Services.css"
import circle2 from '../assets/black_circle_abour_me.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import web_dev_video from '../assets/web_dev_video.mp4';
import ui_ux_video from '../assets/ui_ux_video.mp4';

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


const Services = () => {
    const [activeservice, setactiveService] = useState("UI");
    const uiSplit = useRef(null);
    const wdSplit = useRef(null);

    useGSAP(() => {
        uiSplit.current = new SplitText(".UI_text", {
            type: "lines, words",
            mask: "lines",
        });

        wdSplit.current = new SplitText(".WD_text", {
            type: "lines, words",
            mask: "lines",
        });

        // hide WD text initially
        gsap.set(wdSplit.current.lines, { opacity: 0, y: 30 });
        gsap.set(".service_vid_2", { opacity: 0 });

        return () => {
            uiSplit.current.revert();
            wdSplit.current.revert();
        };
    }, []); // ✅ empty dependency



    const handleService = (service) => {
        setactiveService(service);
        
    }

   useGSAP(() => {
        gsap.to(".indicator", {
            top: activeservice === "WD" ? "59%" : "1%",
            duration: 0.3,
            ease: "back.out",
        });

        if (activeservice === "WD") {
            gsap.to(".service_vid_1", {
                // y: 300,
                opacity: 0,
                duration: 1,

            })

            gsap.to(".service_vid_2", {
                // y: 0,
                opacity: 1,
                duration: 1,

            })
            gsap.to(uiSplit.current.lines, {
                y: -30,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
            });

            gsap.to(wdSplit.current.lines, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.06,
                delay: 0.2,
            });
        }

        if (activeservice === "UI") {
            gsap.to(".service_vid_2", {
                // y: 300,
                opacity: 0,
                duration: 1,

            })

            gsap.to(".service_vid_1", {
                // y: 0,
                opacity: 1,
                duration: 1,

            })
            gsap.to(wdSplit.current.lines, {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
            });

            gsap.to(uiSplit.current.lines, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.06,
                delay: 0.2,
            });
        }
    }, [activeservice]);        






    return (
        <div className='service_section'>
            <div className="display">
                <div className="title_display">
                    <div className='service_tag'>
                        <img src={circle2} alt="" />
                        <h3>SERVICES</h3>
                        <img src={circle2} alt="" />
                    </div>
                    <div className="service_title">
                        <h1>What I do</h1>
                    </div>
                    <div className="services_heading">
                        <ul>
                            <span className='indicator'></span>
                            <li className={activeservice === "UI" ? "active_service" : ""}
                                onClick={() => handleService("UI")}>UI/UX Design</li>
                            <li className={activeservice === "WD" ? "active_service" : ""}
                                onClick={() => handleService("WD")}>Web <br /> Development</li>
                        </ul>
                    </div>            
                </div>

                <div className="content_display">
                    <div className="content_box">                            
                            <video
                                className = "service_vid_1" 
                                src={ui_ux_video}
                                autoPlay 
                                loop 
                                muted
                            />
                            <video
                                className = "service_vid_2" 
                                src={web_dev_video}
                                autoPlay 
                                loop 
                                muted
                            />
                        <h3 className='UI_text'>Clean, intuitive layouts designed with purpose and focus on <br />
                            structuring information clearly, creating visually bright  <br />
                            interfaces, and crafting user flows that feel natural. <br />
                            Every design choice is guided by usability and your <br />
                            brand’s personality—no clutter, no confusion.</h3>
                        
                        <h3 className="WD_text">
                            Fast, modern, and scalable websites built using React and <br />
                            today’s leading front-end tools. I write clean code, optimize <br />
                            performance, and ensure smooth animations and responsive <br />
                            behavior so your website feels light, reliable, and ready <br />
                            for growth.
                        </h3>
                    </div>
                </div>
            </div>
            
            
        
        </div>
    )
}

export default Services
