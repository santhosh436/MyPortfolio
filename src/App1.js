import React from 'react'
import './index.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import WhatCanIDo from './components/WhatCanIDo';
import ExperienceEducation from './components/ExperienceEducation';
const App = () => {
  return (
    <div>
      <Header/>
      <MainSection/>
      <AboutSection/>
      <WhatCanIDo id='services'/>
      <ExperienceEducation/>
      
    </div>
  )
}

export default App
