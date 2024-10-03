import React, { useState } from 'react';
import DestinationData from '../data/DestinationData';
import DestinationItem from './DestinationItem';
import Dots from '../assets/icons/dots.svg';

const Destinations = () => {
  // Stato per tenere traccia dell'elemento selezionato
  const [selectedItem, setSelectedItem] = useState(null);

  // Array di elementi del menu
  const menuItems = ['The Weekend Break', 'The Package Holiday', 'The Group Tour', 'Long Term Slow Travel'];

  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-center font-bold text-2xl xl:text-4xl pt-28 xl:pt-60 pb-10 xl:pb-20">
        Recommended Destination
      </h1>
      <div className="mb-16 max-w-[1024px] mx-auto">
        <ul className="flex justify-around space-x-14 xl:space-x-20 border-b-2 xl:text-lg text-black overflow-x-auto whitespace-nowrap scrollbar-hide">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedItem(index)} // Imposta l'elemento selezionato quando viene cliccato
              className={`cursor-pointer pb-2 transition-all duration-300 ${
                selectedItem === index
                  ? 'font-bold border-b-4 border-black' // Bordo più spesso e nero per l'elemento selezionato
                  : 'border-b-4 border-transparent' // Bordo trasparente per elementi non selezionati
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Destinazioni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14 relative">
        <img
          src={Dots}
          alt="Dots background"
          className="absolute -translate-x-4 xl:-translate-x-16 -translate-y-8 xl:-translate-y-14"
        />
        {DestinationData.map((dest, index) => (
          <DestinationItem
            key={index}
            image={dest.image}
            title={dest.title}
            description={dest.description}
            price={dest.price}
            distance={dest.distance}
            duration={dest.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
