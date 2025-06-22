// Mainlayout.jsx
import React, { useState, useRef, useEffect } from 'react';
import Footer from '../molecules/Footer';
import Navbar from '../molecules/Navbar';
import Sidebar from '../molecules/Sidebar';

const Mainlayout = ({ children }) => {
  const [sideMenu, setSideMenu] = useState(false);
  const sidebarRef = useRef(null);

  const handleSideMenu = () => {
    setSideMenu(prev => !prev);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sideMenu && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        closeSideMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sideMenu]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isOpen={sideMenu} handleOpen={handleSideMenu} />
      
      <div className="flex flex-1 relative">
        {/* Sidebar for mobile */}
        <div 
          ref={sidebarRef}
          className={`fixed z-50 inset-y-0 left-0 w-64 h-full bg-white shadow-md p-4 transform transition-transform duration-300 ease-in-out lg:hidden ${
            sideMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar closeSidebar={closeSideMenu} />
        </div>
        
        {/* Overlay */}
        {sideMenu && (
          <div 
            className="fixed inset-0 bg-black/20  backdrop-blur-md z-40 lg:hidden"
            onClick={closeSideMenu}
          ></div>
        )}
        
        <div className='w-full'>
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mainlayout;