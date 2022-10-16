import React, { useEffect } from 'react';

import Carousel01 from '../images/carousel-01.jpg';
import Carousel02 from '../images/carousel-02.jpg';
import Carousel03 from '../images/carousel-03.jpg';
import Carousel04 from '../images/carousel-04.jpg';
import Carousel05 from '../images/carousel-05.jpg';
import Carousel06 from '../images/carousel-06.jpg';
import Carousel07 from '../images/carousel-07.jpg';
import Carousel08 from '../images/carousel-08.jpg';
import Avatar01 from '../images/carousel-avatar-01.jpg';
import Avatar02 from '../images/carousel-avatar-02.jpg';
import Avatar03 from '../images/carousel-avatar-03.jpg';
import Avatar04 from '../images/carousel-avatar-04.jpg';
import Avatar05 from '../images/carousel-avatar-05.jpg';
import Avatar06 from '../images/carousel-avatar-06.jpg';
import Avatar07 from '../images/carousel-avatar-07.jpg';
import Avatar08 from '../images/carousel-avatar-08.jpg';
import Avatar09 from '../images/carousel-avatar-09.jpg';
import Avatar10 from '../images/carousel-avatar-10.jpg';
import Avatar11 from '../images/carousel-avatar-11.jpg';
import Avatar12 from '../images/carousel-avatar-12.jpg';
import Avatar13 from '../images/carousel-avatar-13.jpg';
import Avatar14 from '../images/carousel-avatar-14.jpg';
import Avatar15 from '../images/carousel-avatar-15.jpg';
import Avatar16 from '../images/carousel-avatar-16.jpg';
import Avatar17 from '../images/carousel-avatar-17.jpg';
import Avatar18 from '../images/carousel-avatar-18.jpg';

// Import Swiper
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
Swiper.use([Navigation]);

function Carousel() {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
  }, []);

  return (
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-gray-100">Trending collections</h2>
          </div>
          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="carousel swiper-container max-w-sm mx-auto sm:max-w-none ">
            <div className="swiper-wrapper">
              {/* Carousel items */}
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel01} width="259" height="148" alt="Carousel 01" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar01} width="36" height="36" alt="Avatar 01" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar02} width="36" height="36" alt="Avatar 02" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar03} width="36" height="36" alt="Avatar 03" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar04} width="36" height="36" alt="Avatar 04" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Digital Art</a>
                  <div className="text-sm text-gray-500 italic">34 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel02} width="259" height="148" alt="Carousel 02" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="36" height="36" alt="Avatar 05" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="36" height="36" alt="Avatar 06" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar07} width="36" height="36" alt="Avatar 07" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar08} width="36" height="36" alt="Avatar 08" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Gradients</a>
                  <div className="text-sm text-gray-500 italic">129 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel03} width="259" height="148" alt="Carousel 03" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar09} width="36" height="36" alt="Avatar 09" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar08} width="36" height="36" alt="Avatar 08" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar10} width="36" height="36" alt="Avatar 10" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar11} width="36" height="36" alt="Avatar 11" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Liquid 3D</a>
                  <div className="text-sm text-gray-500 italic">49 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel04} width="259" height="148" alt="Carousel 04" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar18} width="36" height="36" alt="Avatar 18" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar08} width="36" height="36" alt="Avatar 08" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar01} width="36" height="36" alt="Avatar 01" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar11} width="36" height="36" alt="Avatar 11" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Abstraction</a>
                  <div className="text-sm text-gray-500 italic">24 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel05} width="259" height="148" alt="Carousel 05" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar09} width="36" height="36" alt="Avatar 09" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar12} width="36" height="36" alt="Avatar 12" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar13} width="36" height="36" alt="Avatar 13" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar14} width="36" height="36" alt="Avatar 14" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Landscapes</a>
                  <div className="text-sm text-gray-500 italic">27 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel06} width="259" height="148" alt="Carousel 06" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar15} width="36" height="36" alt="Avatar 01" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar11} width="36" height="36" alt="Avatar 11" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar16} width="36" height="36" alt="Avatar 16" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar17} width="36" height="36" alt="Avatar 17" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Pastel</a>
                  <div className="text-sm text-gray-500 italic">22 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel07} width="259" height="148" alt="Carousel 07" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar09} width="36" height="36" alt="Avatar 09" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar18} width="36" height="36" alt="Avatar 18" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar10} width="36" height="36" alt="Avatar 10" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="36" height="36" alt="Avatar 05" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Dark 3D</a>
                  <div className="text-sm text-gray-500 italic">112 collections</div>
                </div>
              </div>
              <div className="swiper-slide h-auto flex flex-col">
                {/* Image */}
                <img className="w-full aspect-[7/4] object-cover" src={Carousel08} width="259" height="148" alt="Carousel 08" />
                {/* White box */}
                <div className="grow bg-white px-4 pb-6">
                  {/* Avatars */}
                  <div className="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                    <img className="rounded-full border-2 border-white box-content" src={Avatar06} width="36" height="36" alt="Avatar 06" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar05} width="36" height="36" alt="Avatar 05" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar08} width="36" height="36" alt="Avatar 08" />
                    <img className="rounded-full border-2 border-white box-content" src={Avatar07} width="36" height="36" alt="Avatar 07" />
                  </div>
                  {/* Title */}
                  <a className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Baroque</a>
                  <div className="text-sm text-gray-500 italic">77 collections</div>
                </div>
              </div>
            </div>
          </div>
          {/* Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
