import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Images/Logo.png'

function NavBar() {
  return (
    <div className='flex flex-wrap items-center justify-center w-full mb-10 lg:mb-14 md:mb-14'>
      <nav className="fixed top-0 flex flex-wrap items-center justify-center w-full p-2 text-white bg-gray-800">
        <div className="flex flex-wrap items-center justify-between w-full px-2 mx-auto lg:px-10 md:px-10">
          <div className="flex flex-wrap items-center space-x-4 text-xl font-bold">
            <img className='w-8 cursor-pointer md:w-10 lg:w-10' src={Logo} alt="Logo" /><h3 className='font-serif cursor-pointer'>NeroZen</h3></div>
          <div className="flex space-x-4">
            <NavLink to="/home" className="hover:text-gray-400">Home</NavLink>
            <NavLink to="/About" className="hover:text-gray-400">About</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
