import React, { useState } from 'react';

import Author01 from '../images/author-01.jpg';
import Inspiration01 from '../images/inspiration-01.jpg';
import Inspiration02 from '../images/inspiration-02.jpg';
import Inspiration03 from '../images/inspiration-03.jpg';
import Inspiration04 from '../images/inspiration-04.jpg';
import Inspiration05 from '../images/inspiration-05.jpg';
import Inspiration06 from '../images/inspiration-06.jpg';
import Inspiration07 from '../images/inspiration-07.jpg';
import Inspiration08 from '../images/inspiration-08.jpg';
import Inspiration09 from '../images/inspiration-09.jpg';

function Inspiration() {

  const [category, setCategory] = useState('0');

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pt-32 md:pb-20">
          {/* Section header */}
          <div className="pb-12 md:pb-14">
            <div className="relative text-center md:text-left">
              <svg className="fill-gray-300  hidden md:block absolute -ml-7 -mt-8" width="22" height="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.07 1.468c-.288-.134-.161-.496.199-1.005.115-.16.583-.483.693-.462.218.039.433.08.612.152.113.04 1.233 1.173 1.62 1.564.385.368.678.795.958 1.234l.841 1.337c.279.446.553.895.814 1.35.089.152.161.312.217.48l.051.17c.177.68.48 1.289.809 1.885l.242.439a.4.4 0 0 0 .179.173c.246.114 1.162 2.064 1.203 2.35.139.698.161 1.445.28 2.146l.028.118a.256.256 0 0 1-.017.196c-.148.296-.038.478.016.685.078.288.145.58.181.883.019.152-.036.331-.064.5-.028.156-.318.209-.367.18-.139-.081-.222.072-.327.133l-.08.043a.206.206 0 0 1-.037.013c-.045.004-1.215-1.096-1.449-1.349l-.032-.037-.77-1.069c-.43-.514-.737-1.116-.83-1.223-.088-.12-.091-.277-.116-.424-.01-.075-1.069-1.706-1.103-1.772-.151-.371-.426-.678-.377-1.151.01-.092-.039-.159-.078-.228-.34-.595-.563-1.25-.826-1.887-.134-.325-.333-.613-.494-.923-.03-.056-.028-.129-.044-.193l-.04-.159a.39.39 0 0 0-.032-.074c-.426-.706-.726-1.492-1.247-2.138-.112-.153-.366-1.07-.52-1.233-.079-.093.024-.652-.093-.704ZM.414 27.098c-.28.091-.397-.262-.414-.873-.006-.196.156-.74.244-.802.172-.117.342-.228.5-.3.098-.038 1.44.005 1.902-.03.446-.021.872.039 1.293.12.859.154 1.728.267 2.596.387.193.027.379.085.562.168.55.26 1.13.358 1.714.417l.386.037a.315.315 0 0 0 .21-.055c.199-.133 2.005.124 2.23.231.561.244 1.11.605 1.677.856.08.04.172.028.236.148.147.276.331.271.509.328.248.077.494.165.737.28.12.059.228.198.341.307.1.1.006.379-.037.407-.124.08-.048.23-.052.353a.583.583 0 0 1-.012.127c-.015.043-1.373.511-1.681.59l-.047.01-1.166.121c-.596.104-1.197.054-1.324.074-.13.013-.25-.07-.374-.124l-1.882-.043c-.352-.077-.728-.03-1.042-.341-.062-.06-.137-.061-.207-.069-.62-.073-1.214-.283-1.813-.465-.305-.092-.623-.129-.934-.196-.056-.012-.104-.059-.158-.086l-.132-.073a.27.27 0 0 0-.07-.023c-.74-.137-1.447-.433-2.202-.517-.175-.017-.911-.496-1.112-.512-.114-.008-.366-.487-.478-.451Z" fillRule="evenodd" />
              </svg>
              <h2 className="h2 font-cabinet-grotesk">Latest inspiration</h2>
            </div>
          </div>
          {/* Content */}
          <div>
            {/* Category buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '0' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('0')}>
                  <div className="flex items-center justify-center">
                    <span>View All</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '0' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>2.7K</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '1' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('1')}>
                  <div className="flex items-center justify-center">
                    <span>Illustration</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '1' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>1.2K</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '2' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('2')}>
                  <div className="flex items-center justify-center">
                    <span>Branding</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '2' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>1.4K</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '3' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('3')}>
                  <div className="flex items-center justify-center">
                    <span>Product Design</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '3' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>1.7K</span>
                  </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '4' ? 'bg-blue-100 border-blue-300': 'bg-white border-gray-200'}`} onClick={() => setCategory('4')}>
                  <div className="flex items-center justify-center">
                    <span>Typography</span>
                    <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '4' ? 'text-white bg-blue-300': 'text-gray-400 bg-gray-100'}`}>989</span>
                  </div>
                </button>
              </div>
            </div>
            {/* Gallery */}
            <div className="relative">
              {/* Images grid */}
              <div className="max-w-sm mx-auto sm:max-w-none grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-start" data-aos-id-inpspiration>
                {/* 1st Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1', '3'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]">
                  <img className="w-full aspect-square object-cover" src={Inspiration01} width="352" height="352" alt="Inspiration 01" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-9 h-9 rounded-full mr-4" src={Author01} width="36" height="36" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 2nd Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '2', '3'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="100">
                  <img className="w-full aspect-square object-cover" src={Inspiration02} width="352" height="352" alt="Inspiration 02" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 3rd Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1', '3', '4'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="200">
                  <img className="w-full aspect-square object-cover" src={Inspiration03} width="352" height="352" alt="Inspiration 03" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 4th Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1', '2', '4'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="300">
                  <img className="w-full aspect-square object-cover" src={Inspiration04} width="352" height="352" alt="Inspiration 04" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 5th Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1', '2'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="400">
                  <img className="w-full aspect-square object-cover" src={Inspiration05} width="352" height="352" alt="Inspiration 05" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 6th Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1', '2', '3', '4'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="500">
                  <img className="w-full aspect-square object-cover" src={Inspiration06} width="352" height="352" alt="Inspiration 06" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 7th Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '1', '3', '4'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="600">
                  <img className="w-full aspect-square object-cover" src={Inspiration07} width="352" height="352" alt="Inspiration 07" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 8th Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '2', '3', '4'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="700">
                  <img className="w-full aspect-square object-cover" src={Inspiration08} width="352" height="352" alt="Inspiration 08" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* 9th Gallery Image */}
                <a className="relative group hover:shadow-xl transition duration-150 ease-in-out" style={!['0', '2', '4'].includes(category) ? {display: 'none'} : {}} href="#0" data-aos="fade-down" data-aos-anchor="[data-aos-id-inpspiration]" data-aos-delay="800">
                  <img className="w-full aspect-square object-cover" src={Inspiration09} width="352" height="352" alt="Inspiration 09" />
                  {/* Content on hover */}
                  <div className="md:hidden md:group-hover:block absolute bottom-0 left-0 right-0 p-4">
                    {/* Backdrop */}
                    <div className="absolute inset-0 -mt-4 bg-gradient-to-t from-gray-800 to-transparent opacity-80 pointer-events-none" aria-hidden="true" />
                    {/* Content */}
                    <div className="relative flex justify-between">
                      {/* Left side */}
                      <div className="flex items-center">
                        <img className="shrink-0 w-10 h-10 rounded-full mr-4" src={Author01} width="40" height="40" alt="Author 01" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">Ada Ahdiyat</div>
                          <div className="text-xs text-white opacity-60 truncate">@ada-designer-ok</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <div className="flex flex-nowrap items-center ml-2">
                        <button className="text-rose-500 hover:text-rose-600">
                          <span className="sr-only">Like</span>
                          <svg className="fill-current" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.682 1.318A4.485 4.485 0 0 0 11.5 0 4.377 4.377 0 0 0 8 1.707 4.383 4.383 0 0 0 4.5 0a4.5 4.5 0 0 0-3.182 7.682L8 14l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 11.247l-5.285-5A2.5 2.5 0 0 1 4.5 2c1.437 0 2.312.681 3.5 2.625C9.187 2.681 10.062 2 11.5 2a2.5 2.5 0 0 1 1.785 4.251h-.003Z" fillRule="nonzero" />
                          </svg>
                        </button>
                        <div className="whitespace-nowrap text-sm text-white opacity-90 ml-2">4K</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* CTA */}
              <div className="absolute bottom-0 left-0 right-0 h-[352px] bg-gradient-to-t from-white to-transparent">
                <div className="flex h-full items-end justify-center">
                  <a className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm mb-6" href="signup.html">Join The Community</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspiration;
