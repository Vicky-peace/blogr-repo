import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import HeroSection from './components/herosection/HeroSection'
import FeaturesSection from './components/Feature/Features'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div className="App">
    <Header />
    <HeroSection />
    <FeaturesSection />
    <Footer />
  </div>
  )
}

export default App
