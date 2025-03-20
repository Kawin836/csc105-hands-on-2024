import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";

function App() {

  return (
      <>
        <div className='bg-blue-200 h-screen'>
          <Navbar></Navbar>
          <Outlet /> {/* Render nested routes here */}
        </div>
      </>
  )
}

export default App
