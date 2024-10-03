import React from 'react';
import { FaSearch } from 'react-icons/fa';
import BckgImage from '../assets/background.png';

const SearchBar = () => {
  return (
    <div className="relative h-[570px] xl:max-w-[90%] mx-auto xl:rounded-2xl md:overflow-hidden">
      <img src={BckgImage} alt="Beach view" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <div className="flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-3xl xl:text-5xl font-semibold mb-4 text-center">TRAVEL TO EXPLORE</h1>
          <p className="text-sm xl:text-base text-center w-[85%] sm:w-[440px] mb-8">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
            Dolore Magna Aliqua. Ultricies Mi Eget Mauris
          </p>
          <div className="bg-white/80 backdrop-blur-[2px] rounded-xl p-5 xl:p-3 w-[90%] max-w-sm xl:max-w-[850px] mx-auto">
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between space-y-3 xl:space-y-0">
              {/* Where you want to go */}
              <div className="border-b xl:border-b-0 border-gray-300 pb-4 xl:pb-0 xl:w-56 xl:pl-2">
                <label className="block text-black font-semibold mb-1 xl:text-lg">Where you want to go</label>
                <div className="flex items-center space-x-1">
                  <FaSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search your location"
                    className="w-full text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent text-sm xl:text-base"
                  />
                </div>
              </div>

              <div className="flex xl:flex-1 justify-start xl:justify-around xl:mx-5">
                {/* Check-in */}
                <div className="xl:border-l border-gray-300 xl:pl-5 pb-4 mr-11 xl:mr-0 xl:pb-0 w-32">
                  <label className="block text-black font-semibold mb-1 xl:text-lg">Check-in</label>
                  <div className="flex items-center space-x-1">
                    <input
                      type="text"
                      placeholder="Add date"
                      className="w-full text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent text-sm xl:text-base"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="xl:border-l border-gray-300 xl:pl-5 pb-4 xl:pb-0 w-32">
                  <label className="block text-black font-semibold mb-1 xl:text-lg">Check-out</label>
                  <div className="flex items-center space-x-1">
                    <input
                      type="text"
                      placeholder="Add date"
                      className="w-full text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent text-sm xl:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Explore Now button */}
              <div className="flex items-center justify-center">
                <button className="bg-[#4468E2] text-white xl:text-lg w-full xl:w-44 py-2 xl:py-5 rounded-md hover:bg-blue-600 transition duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
