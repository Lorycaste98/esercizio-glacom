import React from 'react';
import { ReactComponent as FbLogo } from '../assets/social/Facebook.svg';
import { ReactComponent as IgLogo } from '../assets/social/Instagram.svg';
import { ReactComponent as LnLogo } from '../assets/social/LinkedIn.svg';

const Footer = () => {
  return (
    <div className="bg-[#E1E8F8] xl:max-w-[90%] mx-auto flex flex-col xl:flex-row gap-4 justify-between items-center px-8 py-10 xl:py-16 xl:rounded-xl xl:mb-20">
      <p className="w-48 xl:w-60 2xl:w-auto order-3 xl:order-1 text-sm xl:text-lg font-medium text-center">
        Copyright © 2020 Travelo. All rights reserved
      </p>
      <div className="xl:order-2">
        <ul className="flex flex-col xl:flex-row xl:gap-16 text-[#1C4961] font-medium items-center space-y-3 xl:space-y-0 mb-2 xl:text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Places</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="xl:order-3 flex gap-4 mb-8 xl:mb-0">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-gray-600">
          <FbLogo className="w-8 h-8 xl:w-10 xl:h-10" />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="hover:text-gray-600">
          <LnLogo className="w-8 h-8 xl:w-10 xl:h-10" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-gray-600">
          <IgLogo className="w-8 h-8 xl:w-10 xl:h-10" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
