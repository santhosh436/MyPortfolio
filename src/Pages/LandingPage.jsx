import React from 'react'
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import WhatCanIDo from '../components/WhatCanIDo';
import ExperienceEducation from '../components/ExperienceEducation';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <div>
        <Header/>
        <MainSection/>
        <AboutSection/>
        <WhatCanIDo/>
        <ExperienceEducation/>
        <Footer/>
    </div>
  )
}

export default LandingPage
