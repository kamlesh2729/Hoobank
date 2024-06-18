import React from 'react'
// import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="w-full px-4 py-4 flex justify-between items-center">
        {/* <Link to="/Home"> */}
        <img src={logo} alt="logo" className="cursor-pointer h-[32px]" />
        {/* </Link> */}

        <RiMenuFill />
        <ul className="text-white hidden gap-6 Lg-l:flex">
          <li className=" cursor-pointer hover:text-[#82f6fa]">
            {/* <Link to="/#">Home</Link> */} Home
          </li>
          <li className=" cursor-pointer hover:text-[#82f6fa]">
            {/* <Link to="/#">About Us</Link> */} About US
          </li>
          <li className=" cursor-pointer hover:text-[#82f6fa]">
            {/* <Link to="/#">Features</Link> */} Features
          </li>
          <li className=" cursor-pointer hover:text-[#82f6fa]">
            {/* <Link to="/#">Solution</Link> */} Solution
          </li>
        </ul>
        <RiCloseLine />
      </nav>
    </>
  );
}

export default Navbar