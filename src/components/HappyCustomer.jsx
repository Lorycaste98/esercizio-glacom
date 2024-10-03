import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import quoteIcon from '../assets/icons/Icon-metro-quote.svg';
import HappyCustomerData from '../data/HappyCustomerData';

const HappyCustomer = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-center font-bold text-2xl xl:text-4xl pt-28 xl:pt-40 pb-10 md:pb-20">Happy Customers</h1>

      {/* Integrazione di Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Spazio tra le slide
        slidesPerView={1} // Numero di slide visibili contemporaneamente
        navigation={false} // Disattiva la navigazione (freccette)
        autoplay={{
          delay: 3000, // Tempo di ritardo in millisecondi prima di passare alla prossima slide (3 secondi)
          disableOnInteraction: false, // L'autoplay continua anche dopo l'interazione dell'utente
        }}
        loop={true} // Attiva lo scorrimento continuo senza interruzioni
        breakpoints={{
          1024: {
            slidesPerView: 2, // Su schermi più larghi mostra 2 slide
          },
        }}
        className="mb-20 xl:mb-40"
      >
        {HappyCustomerData.map((review, index) => (
          <SwiperSlide key={index} className="h-full flex mb-6">
            <div className="p-4 lg:p-8 rounded-xl shadow-lg flex gap-2 lg:gap-6 h-full mx-2">
              <img src={quoteIcon} alt="Double quotes" className="w-10 h-10" />
              <div className="flex flex-col flex-grow-0">
                <p className="lg:text-lg text-gray-700 flex-grow">{review.text}</p>
                <div className="flex items-center mt-4">
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
    </div>
  );
};

export default HappyCustomer;
