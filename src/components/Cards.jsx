import React from 'react';
import CardItem from '../components/CartItem';
import CardsData from '../data/CardsData';

const Cards = () => {
  return (
    <div className="grid gap-10 pt-10 md:pt-40 max-w-[90%] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
      {CardsData.map((card, index) => (
        <CardItem key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default Cards;
