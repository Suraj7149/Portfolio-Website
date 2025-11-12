import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import HireMe from './Components/HireMe.jsx'
import Work from './Components/Work_Section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
    <Services />
    <Work />
    <HireMe />
  </StrictMode>,
)
