import React from 'react'
import './index.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= { <LandingPage/> } />
        <Route path='/portfolio' element= { <PortfolioPage/> } />
        <Route path='/Contact' element= { <ContactPage/> } />
      </Routes>

    </div>
  )
}

export default App
