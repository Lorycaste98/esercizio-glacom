import React, { useState } from 'react';
import DestinationData from '../data/DestinationData';
import DestinationItem from './DestinationItem';
import Dots from '../assets/icons/dots.svg';

// Componente che crea la sezione delle destinazioni consigliate e itera tutti gli elementi del file DestinationData.js per generare ogni card in modo dinamico
const Destinations = () => {
  // Stato per tenere traccia dell'elemento selezionato nel menu
  const [selectedItem, setSelectedItem] = useState(0);

  // Array di elementi del menu delle destinazioni
  const menuItems = ['The Weekend Break', 'The Package Holiday', 'The Group Tour', 'Long Term Slow Travel'];

  return (
    <div className="max-w-[90%] mx-auto">
      {/* Titolo principale della sezione */}
      <h1 className="text-center font-bold text-2xl xl:text-4xl pt-28 xl:pt-60 pb-10 xl:pb-20">
        Recommended Destination
      </h1>

      {/* Menu di selezione delle destinazioni */}
      <nav className="mb-16 max-w-[1024px] mx-auto">
        <ul className="flex justify-around space-x-14 xl:space-x-20 border-b-2 xl:text-lg text-black overflow-x-auto whitespace-nowrap scrollbar-hide">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedItem(index)} // Imposta l'elemento selezionato quando viene cliccato
              className={`cursor-pointer pb-2 transition-all duration-300 ${
                selectedItem === index ? 'font-bold border-b-4 border-black' : 'border-b-4 border-transparent'
              }`}
            >
              {item} {/* Nome dell'elemento del menu */}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sezione di iterazione delle destinazioni */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14 relative">
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
      </section>
    </div>
  );
};

export default Destinations;
