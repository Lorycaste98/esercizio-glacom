import React from 'react';
import { ReactComponent as FbLogo } from '../assets/social/Facebook.svg'; // Importa il logo di Facebook
import { ReactComponent as IgLogo } from '../assets/social/Instagram.svg'; // Importa il logo di Instagram
import { ReactComponent as LnLogo } from '../assets/social/LinkedIn.svg'; // Importa il logo di LinkedIn

// Componente Footer con alcuni link sia all'interno del sito sia esterni
const Footer = () => {
  // Array di link del menu
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Places', link: '/places' },
    { name: 'Careers', link: '/careers' },
    { name: 'Blog', link: '/blog' },
  ];

  return (
    <footer className="bg-[#E1E8F8] xl:max-w-[90%] mx-auto flex flex-col xl:flex-row gap-4 justify-between items-center px-8 py-10 xl:py-16 xl:rounded-xl xl:mb-20">
      <p className="w-48 xl:w-60 2xl:w-auto order-3 xl:order-1 text-sm xl:text-lg font-medium text-center">
        <small>Copyright © 2020 Travelo. All rights reserved</small>
      </p>

      <nav className="xl:order-2" aria-label="Footer Navigation">
        <ul className="flex flex-col xl:flex-row xl:gap-16 text-[#1C4961] font-medium items-center space-y-3 xl:space-y-0 mb-2 xl:text-lg">
          {/* Itera attraverso gli elementi del menu e crea un link fittizio per ciascuno */}
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} aria-label={`Link to ${item.name}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="xl:order-3 flex gap-4 mb-8 xl:mb-0" aria-label="Social Media Links">
        {/* Link ai social media */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-600"
        >
          <FbLogo className="w-8 h-8 xl:w-10 xl:h-10" />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-600"
        >
          <LnLogo className="w-8 h-8 xl:w-10 xl:h-10" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-600"
        >
          <IgLogo className="w-8 h-8 xl:w-10 xl:h-10" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
