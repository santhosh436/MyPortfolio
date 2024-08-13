import React from 'react'
import './index.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';
import WhatCanIDo from './components/WhatCanIDo';
const App = () => {
  return (
    <div>
      <Header/>
      <MainSection/>
      <AboutSection/>
      <WhatCanIDo/>
    </div>
  )
}

export default App
