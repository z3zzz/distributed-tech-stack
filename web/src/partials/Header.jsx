import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='absolute w-full z-30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link className='block group' to='/' aria-label='Cruip'>
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

          {/* Desktop navigation 

          <nav className="flex grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link className="text-sm font-medium text-indigo-500 hover:underline px-3 lg:px-5 py-2 flex items-center" to="/signin">
                  Sign in
                </Link>
              </li>
              <li className="ml-3">
                <Link className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm" to="/post-a-job">
                  Post a job - $299
                </Link>
              </li>
            </ul>

          </nav>
            */}
        </div>
      </div>
    </header>
  );
}

export default Header;
