import React, { useState } from 'react';
import logo from "../assets/logo.png"
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`flex justify-between items-center p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <img src={logo} alt="Agency Logo" className="h-14" />
      <nav className="space-x-6">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About Us</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full">
        {darkMode ? '🌙' : '☀️'}
      </button>
      <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">Get a Quote</button>
    </header>
  );
};

export default Header;
