import React from 'react'
import PersonalInfo from '../portfolio/PersonalInfo'
import Header from '../components/Header'
import Skills from '../portfolio/Skills'
import Projects from '../portfolio/Projects'
const PortfolioPage = () => {
  return (
    <div>
        <Header/>
        <PersonalInfo/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default PortfolioPage
