import React from 'react'
import PersonalInfo from '../portfolio/PersonalInfo'
import Header from '../components/Header'
import Skills from '../portfolio/Skills'
import Projects from '../portfolio/Projects'
import Footer from '../components/Footer'
const PortfolioPage = () => {
  return (
    <div>
        <Header/>
        <PersonalInfo/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default PortfolioPage
