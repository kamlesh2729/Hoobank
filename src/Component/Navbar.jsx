import React from 'react'

import logo  from '../assets/logo.svg';
const Navbar = () => {
  return (
    <>
    <nav className='flex'>
        <img src={logo} alt='logo' className=' cursor-pointer' />
        
        <ul className='text-white flex'>
      <li>Home</li>
      <li>About Us</li>
      <li>Features</li>
      <li>Solution</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar