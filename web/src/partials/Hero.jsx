import React from "react";
import { Link } from "react-router-dom";

import Illustration from "../images/hero-illustration.svg";

function Hero({ onRequestClick, scrollRef }) {
  const onClick = () => {
    onRequestClick();
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className='relative overflow-hidden'>
      {/* Bg */}
      <div
        className='absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10'
        aria-hidden='true'
      />

      {/* Illustration */}
      <div
        className='hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10'
        aria-hidden='true'
      >
        <img
          src={Illustration}
          className='max-w-none'
          width='1440'
          height='749'
          alt='Hero Illustration'
        />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-28 pb-8 md:pt-36 md:pb-16'>
          {/* Hero content */}
          <div className='max-w-3xl text-center md:text-left'>
            {/* Copy */}
            <h1 className='h2 font-inter mb-6' style={{ lineHeight: 1.2 }}>
              안녕하세요, 백엔드 개발자 <br />
              김광태입니다
            </h1>
            <p className='text-lg text-gray-500 mb-8'>
              방문해 주셔서 감사합니다! <br />
              <br />
              저에 대한 이야기와 포트폴리오들을 API 요청하는 방식으로 <br />{" "}
              재미있게 보실 수 있도록 만들어 보았습니다.
              <br className='hidden md:block' />
            </p>
            {/* Button + Avatars */}
            <div className='sm:flex sm:items-center sm:justify-center md:justify-start space-y-6 sm:space-y-0 sm:space-x-5'>
              <div>
                <button
                  className='btn text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm'
                  onClick={onClick}
                >
                  API 요청하기
                </button>
              </div>
              <div className='sm:flex sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-3'>
                <div className='text-sm text-gray-500 font-medium'>
                  지금까지 <span className='text-indigo-500'>100K+</span> 개의
                  요청이 이루어졌습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
