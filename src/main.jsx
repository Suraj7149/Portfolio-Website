import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
    <Services />
  </StrictMode>,
)
