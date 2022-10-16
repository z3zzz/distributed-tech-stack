import React from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../images/auth-illustration.svg';
import TestimonialAuth01 from '../images/testimonial-auth-01.jpg';
import TestimonialAuth02 from '../images/testimonial-auth-02.jpg';
import TestimonialAuth03 from '../images/testimonial-auth-03.jpg';

function SignIn() {
  return (
    <main className="flex">
      {/* Content */}
      <div className="min-h-screen w-full lg:w-1/2">
        <div className="h-full px-5 sm:px-6">
          <div className="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">
            {/* Site header */}
            <header className="flex-1 flex mb-auto">
              <div className="flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <Link className="block group" to="/" aria-label="Cruip">
                  <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-indigo-500" d="M13.853 18.14 1 10.643 31 1l-.019.058z" />
                    <path className="fill-indigo-300" d="M13.853 18.14 30.981 1.058 21.357 31l-7.5-12.857z" />
                  </svg>
                </Link>
              </div>
            </header>

            <div className="flex-1 py-8">
              <div className="mb-10">
                <h1 className="text-4xl font-extrabold font-inter mb-2">Sign in to JobBoard!</h1>
                <div className="text-gray-500">Enter your email and we'll email you a magic link for a password-free sign in.</div>
              </div>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email
                    </label>
                    <input id="email" className="form-input w-full" type="email" required />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm group">
                    Get Magic Link{' '}
                    <span className="tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="border-t border-gray-200 grow mr-3" aria-hidden="true" />
                <div className="text-sm text-gray-500 italic">Or</div>
                <div className="border-t border-gray-200 grow ml-3" aria-hidden="true" />
              </div>

              {/* Social login */}
              <button className="btn-sm text-sm text-white bg-rose-500 hover:bg-rose-600 w-full relative flex after:flex-1 group">
                <div className="flex-1 flex items-center">
                  <svg className="w-4 h-4 fill-current text-rose-200 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                  </svg>
                </div>
                <span className="flex-auto text-rose-50 pl-3">
                  Continue With Google
                  <span className="inline-flex tracking-normal text-rose-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
        {/* Bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

        {/* Illustration */}
        <div className="hidden md:block absolute right-0 pointer-events-none -z-10" aria-hidden="true">
          <img src={Illustration} className="max-w-none" width="1440" height="900" alt="Page Illustration" />
        </div>

        {/* Quotes */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-xl mx-auto">
              <div className="space-y-3 group">
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <img className="rounded-full" src={TestimonialAuth01} width="88" height="88" alt="Testimonial 01" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>I got an offer three weeks after I applied via JobBoard. I have never been happier in my career life.</p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Lisa Smith, developer at{' '}
                        <a className="text-sky-500 hover:underline" href="#0">
                          AppyYou
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <img className="rounded-full" src={TestimonialAuth02} width="88" height="88" alt="Testimonial 02" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>I got an offer three weeks after I applied via JobBoard. I have never been happier in my career life.</p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Mark Mills, developer at{' '}
                        <a className="text-sky-500 hover:underline" href="#0">
                          App.com
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <img className="rounded-full" src={TestimonialAuth03} width="88" height="88" alt="Testimonial 03" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>I got an offer three weeks after I applied via JobBoard. I have never been happier in my career life.</p>
                      </blockquote>
                      <figcaption className="text-sm font-medium">
                        Lisa Smith, developer at{' '}
                        <a className="text-sky-500 hover:underline" href="#0">
                          AppyYou
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;