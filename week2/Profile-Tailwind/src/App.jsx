import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import AboutMe from './pages/AboutMe'

function App() {


  return (
    <>
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Gallery></Gallery>
    </div>
    </>
  )
}

export default App
