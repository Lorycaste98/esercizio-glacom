import React from 'react';

// Componente che crea la struttura per una card con i suoi props
const CardItem = ({ icon, title, description }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg p-6 flex flex-col max-w-xs text-left min-h-full">
      <section className="w-16 h-16 p-2 mb-4 bg-[#EBF0FE] rounded-xl flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </section>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 flex-grow">{description}</p>
    </article>
  );
};

export default CardItem;
