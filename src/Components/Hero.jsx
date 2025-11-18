import React, {useState} from 'react'
import './Hero.css'
import arrow from '../assets/arrow_with_circle.png';

const Hero = () => {
    const [activeItem, setActiveItem] = useState(1); // Store the ID of the active item

    const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const menuItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Service' },
    { id: 4, name: 'Work' },
  ];

  return (
    <div className='hero'>
        <div className="hero_content">
            
            <nav className='navbar'>
                <a href="">label</a>
                <ul>
                    {/* <li className='item active'><div className='circle'></div>Home</li>
                    <li className='item' onClick={() => {}}><div className='circle'></div>About</li>
                    <li className='item'><div className='circle'></div>Service</li>
                    <li className='item'><div className='circle'></div>Work</li> */}

                    {menuItems.map((item) => (
                        <li key={item.id}
                        className={activeItem === item.id ? 'item active' : 'item'}
                        onClick={() => handleItemClick(item.id)}>
                            <div className='circle'></div>
                            {item.name}
                        </li>
        ))}
                </ul>
            </nav>

        <div className='discription'>
            <div className="desc_text">
                <h1>
                    Lorem ipsum <br />
                    dolor sit amet.
                </h1>
                <h3 className='hero_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                    Nullam id feugiat libero.
                </h3>

            </div>
            

            <div className='learn_more'>
                <h3>Learn More</h3>
                <div className="arrow">
                    <img src={arrow} alt="arrow" />
                </div>
                
            </div>

            <div className="Explore_more">
                <h3 className='Explore_more_text'>
                    Explore a wide portfolio <br />
                    of my works
                </h3>
        </div>
        </div>

        
            
        </div>
      <div className="video">
        <div className="overlay"></div>
        <button className="contact_us">
                Contact Us
        </button>
      </div>
    </div>
  )
}

export default Hero
