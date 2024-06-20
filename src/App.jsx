import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/herosection/HeroSection'
import Footer from './components/footer/Footer'
import Content from './components/contents/Content'
import Content2 from './components/contents/Content1'
import Content3 from './components/contents/Content2'

function App() {


  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Content />
      <Content2 />
      <Content3 />
    <Footer />
  </div>
  )
}

export default App
