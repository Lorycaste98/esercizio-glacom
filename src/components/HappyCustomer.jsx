import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import quoteIcon from '../assets/icons/Icon-metro-quote.svg';
import HappyCustomerData from '../data/HappyCustomerData';

// Componente per visualizzare le recensioni con un Carosello con SwiperJS e itera tutti gli elementi del file HappyCustomerData.js per generare ogni card in modo dinamico
const HappyCustomer = () => {
  return (
    <section className="max-w-[90%] mx-auto">
      {/* Titolo principale della sezione */}
      <h1 className="text-center font-bold text-2xl xl:text-4xl pt-28 xl:pt-40 pb-10 md:pb-20">Happy Customers</h1>

      {/* Integrazione di Swiper per il carosello */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Include i moduli necessari
        spaceBetween={20} // Imposta lo spazio tra le slide
        slidesPerView={1} // Mostra una slide alla volta di default
        autoplay={{
          delay: 4000, // Tempo di attesa tra le slide in millisecondi (4 secondi)
          disableOnInteraction: false, // L'autoplay continua anche dopo che l'utente interagisce
        }}
        loop={true} // Abilita lo scorrimento continuo
        breakpoints={{
          1024: {
            slidesPerView: 2, // Mostra 2 slide su schermi più larghi di 1024px
          },
        }}
        className="mb-20 xl:mb-40"
      >
        {/* Iterazione delle recensioni */}
        {HappyCustomerData.map((review, index) => (
          <SwiperSlide key={index} className="h-full flex mb-6">
            {/* Contenitore della slide */}
            <div className="p-4 lg:p-8 rounded-xl shadow-lg flex gap-2 lg:gap-6 h-full mx-2">
              {/* Contenitore per il contenuto della recensione */}
              <img src={quoteIcon} alt="Double quotes" className="w-10 h-10" />
              <div className="flex flex-col flex-grow-0">
                {/* Contenitore per il testo della recensione */}
                <p className="lg:text-lg text-gray-700 flex-grow">{review.text}</p>
                <div className="flex items-center mt-4">
                  {/* Contenitore per le informazioni dell'autore */}
                  <img
                    src={review.profileImage}
                    alt={`${review.author} profile`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg lg:text-xl font-semibold">{review.author}</h3>
                    <p className="text-sm lg:text-base text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HappyCustomer;
