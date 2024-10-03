import React from 'react';
import imgBlog1 from '../assets/blog-photos/blog-photo-mountain.png';
import imgBlog2 from '../assets/blog-photos/blog-photo-plane.png';
import imgBlog3 from '../assets/blog-photos/blog-photo-palace.png';

const Blogs = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-center font-bold text-2xl xl:text-4xl pt-[72px] xl:pt-60 pb-10 xl:pb-20">Blogs</h1>
      <div className="grid grid-cols-1 xl:grid-cols-7 xl:grid-rows-4 space-y-4 xl:space-y-0 xl:gap-4 mx-auto">
        {/* Immagine principale grande */}
        <div className="col-span-4 row-span-4 relative">
          <img
            src={imgBlog1}
            alt="Background Mountain"
            className="w-full h-full object-cover rounded-xl opacity-80 filter brightness-50"
          />
          {/* Testo sopra l'immagine */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-2xl md:text-4xl xl:text-5xl font-semibold xl:w-[500px] text-center space-y-1 xl:space-y-3">
              <span className="block">The Ultimate Guide</span>
              <span className="block">to Climbing</span>
              <span className="block">Mount Kilimanjaro</span>
            </h2>
          </div>
        </div>

        {/* Prima immagine più piccola (sopra) */}
        <div className="col-span-3 row-span-2 relative">
          <img
            src={imgBlog2}
            alt="Background Plane Travel"
            className="w-full h-full object-cover rounded-xl opacity-80 filter brightness-50"
          />
          {/* Testo sopra l'immagine */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-xl md:text-4xl xl:text-3xl font-semibold w-[230px] md:w-[380px] xl:w-[350px] text-center leading-normal">
              12 Things I’d Tell Any New Traveler
            </h2>
          </div>
        </div>

        {/* Seconda immagine più piccola (sotto) */}
        <div className="col-span-3 row-span-2 relative">
          <img
            src={imgBlog3}
            alt="Background Palace"
            className="w-full h-full object-cover rounded-xl opacity-80 filter brightness-50"
          />
          {/* Testo sopra l'immagine */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-xl md:text-4xl xl:text-3xl font-semibold w-[310px] md:w-[550px] xl:w-[450px] text-center leading-normal">
              The Ultimate Packing List for Female Travelers
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
