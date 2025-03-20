import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className='flex justify-center'>
          <nav className='flex justify-evenly items-center w-[500px] h-[90px] bg-blue-100 drop-shadow-xl'>
              <NavLink to="/" className="text-2xl font-medium px-[10px] py-[5px] hover:bg-white hover:rounded-xl">Home</NavLink>
              <NavLink to="/login" className="text-2xl font-medium px-[10px] py-[5px] hover:bg-white hover:rounded-xl">Login</NavLink>
              <NavLink to="/fav" className="text-2xl font-medium px-[10px] py-[5px] hover:bg-white hover:rounded-xl">Favourites</NavLink>
          </nav>
        </header>
    </>
  )
}

export default Navbar