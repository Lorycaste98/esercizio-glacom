import React from 'react';

const CardItem = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col max-w-xs text-left min-h-full ">
      <div className="w-16 h-16 p-2 mb-4 bg-[#EBF0FE] rounded-xl flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default CardItem;
