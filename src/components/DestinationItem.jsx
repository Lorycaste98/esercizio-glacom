import React from 'react';
import PlaneIcon from '../assets/icons/icon1.svg';
import RestIcon from '../assets/icons/icon2.svg';
import BuildingIcon from '../assets/icons/icon3.svg';

const DestinationItem = ({ image, title, description, price, distance, duration }) => {
  return (
    <div className="bg-white text-[#163235] mb-10 xl:mb-20 z-40 flex flex-col">
      <img className="w-full h-68 object-cover rounded-lg" src={image} alt={title} />
      <div className="flex flex-col flex-1  py-2">
        <h2 className="font-medium text-xl md:text-2xl xl:text-3xl mb-2">{title}</h2>
        <p className="font-medium md:text-lg xl:text-xl flex-grow">{description}</p>
      </div>
      <div className="pt-3 xl:pt-5 pb-3 flex justify-between items-center">
        <div className="flex space-x-2">
          <img src={BuildingIcon} alt="Building" className="w-7 h-6 xl:w-9 xl:h-8" />
          <img src={RestIcon} alt="Restaurant" className="w-7 h-6 xl:w-9 xl:h-8" />
          <img src={PlaneIcon} alt="Plane" className="w-7 h-6 xl:w-9 xl:h-8" />
        </div>
        <span className="font-semibold text-lg md:text-xl xl:text-2xl">₹ {price}</span>
      </div>
      <div className="flex justify-between items-center text-sm md:text-base xl:text-lg font-medium">
        <span>{distance} Kms</span>
        <span>Approx {duration} trip</span>
      </div>
    </div>
  );
};

export default DestinationItem;
