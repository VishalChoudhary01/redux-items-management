import React from 'react';
import logo from './../../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router';

const Navbar = ({ isOpen, handleOpen }) => {
  return (
    <div className="w-full flex justify-between items-center h-[5.625rem] px-4 sm:px-8 bg-white shadow-sm">
      <img src={logo} alt="Logo" className="lg:w-[16.563rem] lg:h-[2.5rem] w-[10rem] h-full" />

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-x-6 text-[1.2rem]">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/view-items">View Items</NavItem>
        <NavItem to="/add-items">Add Items</NavItem>
        <NavItem to="/contact-us">Contact Us</NavItem>
      </ul>

      {/* Mobile menu button */}
      <button 
        onClick={handleOpen} 
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <RxHamburgerMenu className='text-2xl text-gray-800'/>
      </button>
    </div>
  );
};

const NavItem = ({ to, children }) => (
  <li>
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `block px-3 py-2 rounded-md transition-colors relative
         after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
         after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300
         ${isActive 
           ? 'text-gray-900 font-medium after:w-4/5' 
           : 'text-gray-600 hover:text-gray-900 after:w-0'}`
      }
    >
      {children}
    </NavLink>
  </li>
);

export default Navbar;