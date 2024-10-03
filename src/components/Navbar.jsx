import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importiamo le icone per il menu hamburger
import LogoBig from '../assets/icons/logo-title.svg';
import LogoSmall from '../assets/icons/logo-icon.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');

  const menuItems = ['Home', 'About', 'Places', 'Careers', 'Blog'];

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setIsMenuOpen(false); // Chiudere il menu hamburger dopo la selezione
  };

  return (
    <div className="xl:max-w-[90%] mx-auto flex justify-between items-center p-5 xl:px-0 relative">
      {/* Logo che riporta alla home */}
      <a href="/" onClick={() => setActiveMenu('Home')}>
        <img src={LogoBig} alt="Logo" className="hidden md:block" />
        <img src={LogoSmall} alt="Logo" className="md:hidden" />
      </a>

      {/* Menu principale */}
      <div className="hidden xl:flex flex-1 justify-center">
        <ul className="flex gap-16 text-[#1C4961] font-medium text-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer ${activeMenu === item ? 'font-bold text-[#1C4961]' : ''}`}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Pulsante Connect */}
      <button className="bg-[#4468E2] text-white px-4 py-1 rounded-full hidden xl:block">Connect</button>

      {/* Pulsante menu hamburger */}
      <div className="xl:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute bg-white w-full left-0 top-14 z-40 flex flex-col justify-center items-center">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${activeMenu === item ? 'font-bold text-[#1C4961]' : ''}`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#4468E2] text-white py-2 px-5 rounded-full my-4">Connect</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
