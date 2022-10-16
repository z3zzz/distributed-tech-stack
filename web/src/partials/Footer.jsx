import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const onClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-8 md:py-12'>
          {/* Top area */}
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mb-4 md:mb-6'>
            <div className='shrink-0 mr-4'>
              {/* Logo */}
              <Link
                className='inline-flex group mb-8 md:mb-0'
                to='/'
                aria-label='Cruip'
                onClick={onClick}
              >
                <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    className='fill-indigo-500'
                    d='M13.853 18.14 1 10.643 31 1l-.019.058z'
                  />
                  <path
                    className='fill-indigo-300'
                    d='M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z'
                  />
                </svg>
              </Link>
            </div>
            {/* Social links */}
            <div className='flex items-center space-x-4 mb-4 md:order-2 md:ml-4 md:mb-0'>
              <div className='text-xl font-nycd text-indigo-500'>Follow me</div>
              <ul className='inline-flex space-x-3'>
                <li>
                  <a
                    className='flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out'
                    href='https://twitter.com/KwangtaeKim2'
                    aria-label='Twitter'
                    target='_blank'
                  >
                    <svg
                      className='w-8 h-8 fill-current'
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className='flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out'
                    href='https://github.com/z3zzz'
                    aria-label='Github'
                    target='_blank'
                  >
                    <svg
                      className='w-8 h-8 fill-current'
                      viewBox='0 0 32 32'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className='flex justify-center items-center text-indigo-500 bg-indigo-100 hover:text-white hover:bg-indigo-500 rounded-full transition duration-150 ease-in-out'
                    href='https://www.linkedin.com/in/kwangtae-kim-3abb83252/'
                    aria-label='Linkedin'
                    target='_blank'
                  >
                    <svg
                      className='w-8 h-8 p-2 pr-1 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 500 500'
                    >
                      <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom area */}
          <div className='text-center md:flex md:items-center md:justify-between'>
            {/* Copyright */}
            <div className='text-sm text-gray-500'>
              @kwangtaekim.com | All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
