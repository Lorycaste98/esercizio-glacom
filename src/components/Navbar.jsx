import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importiamo le icone per il menu hamburger
import LogoBig from '../assets/icons/logo-title.svg';
import LogoSmall from '../assets/icons/logo-icon.svg';

// Componente della Navbar per navigazione sul sito
const Navbar = () => {
  // Stato per gestire se il menu mobile è aperto o chiuso
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Stato per gestire quale elemento del menu è attualmente attivo
  const [activeMenu, setActiveMenu] = useState('Home');

  // Definizione degli elementi del menu
  const menuItems = ['Home', 'About', 'Places', 'Careers', 'Blog'];

  // Funzione per gestire il click sugli elementi del menu
  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setIsMenuOpen(false); // Chiude il menu hamburger dopo la selezione
  };

  return (
    <header className="xl:max-w-[90%] mx-auto p-5 xl:px-0 relative">
      <nav className="flex justify-between items-center">
        {/* Logo che riporta alla home */}
        <a href="/" onClick={() => setActiveMenu('Home')}>
          {/* Logo per schermi medi e grandi */}
          <img src={LogoBig} alt="Logo" className="hidden md:block" />
          {/* Logo per schermi piccoli */}
          <img src={LogoSmall} alt="Logo" className="md:hidden" />
        </a>

        {/* Menu principale per schermi grandi */}
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
        {/* Pulsante Connect per schermi grandi */}
        <button className="bg-[#4468E2] text-white px-4 py-1 rounded-full hidden xl:block">Connect</button>

        {/* Pulsante menu hamburger per schermi piccoli */}
        <div className="xl:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {/* Cambia l'icona a seconda dello stato del menu */}
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Menu mobile visibile solo quando `isMenuOpen` è true */}
      {isMenuOpen && (
        <div className="absolute bg-white w-full left-0 top-14 z-40 flex flex-col justify-center items-center">
          {/* Lista di navigazione per il menu mobile creata con map()*/}
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
          {/* Pulsante Connect per il menu mobile */}
          <button className="bg-[#4468E2] text-white py-2 px-5 rounded-full my-4">Connect</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
