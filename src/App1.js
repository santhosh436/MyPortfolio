import React from 'react'
import './index.css';
import {BrowserRouter as Rounter,Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div>
      <Rounter>
        <Routes>
          <Route path='/' element= { <LandingPage/> } />
          <Route path='/portfolio' element= { <PortfolioPage/> } />
          <Route path='/contact' element= { <ContactPage/> } />
        </Routes>
      </Rounter>

    </div>
  )
}

export default App
