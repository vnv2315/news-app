import React, { useState } from 'react';
import menu from '../assets/menu.png';

const Navbar = ({ setCategory, setLanguage, setCountry }) => {
  const [menuBar, setMenuBar] = useState(false);

  const navItems = [
    { label: "Home", value: "general" },
    { label: "Business", value: "technology" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Health", value: "health" },
    { label: "Sports", value: "sports" },
    { label: "Science", value: "science" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-gray-700 flex justify-between flex-wrap items-center px-4 sm:px-6 lg:px-8 py-2 gap-4">
      <span className="cursor-default select-none flex text-2xl font-medium border border-blue-700">
        <span className="bg-blue-700 text-white px-2 py-1 font-sans">VI</span>
        <span className="bg-white text-blue-700 px-2 py-1 font-sans">News</span>
      </span>

      <div className="hidden lg:flex flex-wrap items-center px-4 lg:px-8 py-2 gap-7">
        <ul className='flex gap-7'>
          {navItems.map((item) => (
            <li key={item.value} onClick={() => setCategory(item.value)} className="text-gray-400 hover:text-gray-200 cursor-pointer">{item.label}</li>
          ))}
        </ul>
        <div className='flex items-center gap-3'>
          <select className="text-white bg-black px-1 py-1 rounded" onChange={(e) => setCountry(e.target.value)}>
            <option value="us">United States</option>
            <option value="in">India</option>
          </select>
          <select className="text-white bg-black px-1 py-1 rounded" onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>

      <span className='block lg:hidden'>
        <img onClick={() => setMenuBar(true)} className='w-12' src={menu} alt="menu" />
      </span>

      <ul className={`lg:hidden flex flex-col gap-10 text-2xl text-white bg-gray-700/90 backdrop-blur-md w-auto p-10 right-0 top-0 h-screen fixed z-10 transition-transform ease-in-out duration-700 transform ${menuBar ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-start pt-4">
          <img src={menu} alt="menu" className="w-12 cursor-pointer" onClick={() => setMenuBar(false)} />
        </div>
        {navItems.map((item) => (
          <li key={item.value} onClick={() => { setCategory(item.value); setMenuBar(false); }} className="text-gray-400 hover:text-gray-200 cursor-pointer">{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
