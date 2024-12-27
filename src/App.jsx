import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="sticky-top z-1"><Header/></div>
    <div id="home" ><Home/></div>
    <div id="about" className="bg-light"><About/></div>
    <div id="career"><Achievements/></div>
    <div id="gallery" className="bg-light"><Gallery/></div>
    <div id="contact"><Contact/></div>
    <div id="footer"><Footer/></div>
    </>
  )
}

export default App
