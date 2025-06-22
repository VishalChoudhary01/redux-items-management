import React from 'react';
import { NavLink } from 'react-router';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-[1rem] font-bold text-gray-800">Menu</h2>
      </div>
      
      <nav className="flex-1 flex flex-col space-y-1 py-4">
        <SidebarLink to="/" onClick={closeSidebar}>Home</SidebarLink>
        <SidebarLink to="/view-items" onClick={closeSidebar}>View Items</SidebarLink>
        <SidebarLink to="/add-items" onClick={closeSidebar}>Add Items</SidebarLink>
        <SidebarLink to="/contact-us" onClick={closeSidebar}>Contact Us</SidebarLink>
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, onClick, children }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-4 py-2.5 text-md font-medium transition-colors relative
       after:absolute after:left-[26%] after:-translate-x-1/2 after:bottom-1.5 
       after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300
       ${isActive
         ? 'text-gray-900  after:w-[35%]'
         : 'text-gray-600 hover:bg-gray-100 after:w-0'}`
    }
  >
    {children}
  </NavLink>
);

export default Sidebar;