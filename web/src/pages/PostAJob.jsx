import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Illustration from '../images/auth-illustration.svg';
import TestimonialAuth04 from '../images/testimonial-auth-04.jpg';
import TestimonialAuth05 from '../images/testimonial-auth-05.jpg';
import TestimonialAuth06 from '../images/testimonial-auth-06.jpg';
import UploadImage from '../images/upload.jpg';

function PostAJob() {
  const [stick, setStick] = useState(false);
  const [highlight, setHighlight] = useState(true);

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
                <h1 className="text-4xl font-extrabold font-inter mb-2">Post a job on JobBoard</h1>
                <div className="text-gray-500">Find the best talent from around the world on the most exclusive job board on the internet.</div>
              </div>

              {/* Form */}
              <form className="mb-12">
                <div className="divide-y divide-gray-200 -my-6">
                  {/* Group #1 */}
                  <div className="py-6">
                    <div className="text-lg font-bold text-gray-800 mb-5">
                      <span className="text-indigo-500">1.</span> Your company
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input id="name" className="form-input w-full" type="text" required placeholder="E.g., Acme Inc." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                          Contact Email <span className="text-red-500">*</span>
                        </label>
                        <input id="email" className="form-input w-full" type="email" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="file">
                          Company Logo <span className="text-gray-500">(optional)</span>
                        </label>
                        <div className="flex items-center">
                          <div className="shrink-0 mr-4">
                            <img className="object-cover w-16 h-16 rounded-full border border-gray-200" src={UploadImage} alt="Upload" />
                          </div>
                          <div>
                            <input
                              id="file"
                              type="file"
                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Group #2 */}
                  <div className="py-6">
                    <div className="text-lg font-bold text-gray-800 mb-5">
                      <span className="text-indigo-500">2.</span> The role
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="position">
                          Position Name <span className="text-red-500">*</span>
                        </label>
                        <input id="position" className="form-input w-full" type="text" required placeholder="E.g., Senior Software Engineer" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="role">
                          Role <span className="text-rose-500">*</span>
                        </label>
                        <select id="role" className="form-select text-sm py-2 w-full" required>
                          <option>Programming</option>
                          <option>Design</option>
                          <option>Management / Finance</option>
                          <option>Customer Support</option>
                          <option>Sales / Marketing</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="commitment">
                          Commitment <span className="text-rose-500">*</span>
                        </label>
                        <select id="commitment" className="form-select text-sm py-2 w-full" required>
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Intership</option>
                          <option>Contract / Freelance</option>
                          <option>Co-founder</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-800 font-medium mb-1" htmlFor="description">
                          Job Description <span className="text-rose-500">*</span>
                        </label>
                        <textarea id="description" className="form-textarea text-sm py-2 w-full" rows="4" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="salary">
                          Salary <span className="text-gray-500">(optional)</span>
                        </label>
                        <input id="salary" className="form-input w-full" type="text" />
                        <div className="text-xs text-gray-500 italic mt-2">Example: “$100,000 - $170,000 USD”</div>
                      </div>
                    </div>
                  </div>

                  {/* Group #3 */}
                  <div className="py-6">
                    <div className="text-lg font-bold text-gray-800 mb-5">
                      <span className="text-indigo-500">3.</span> Select add-ons and pay
                    </div>
                    <div className="space-y-4">
                      <button
                        className={`w-full text-left py-3 px-4 border rounded ${
                          stick ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setStick(!stick);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-gray-800 font-medium mb-1">Stick your post to stay on top (+$79)</div>
                            <div className="text-sm text-gray-500 italic">4x more views</div>
                          </div>
                          <div className="shrink-0 rounded-full border border-gray-200 ml-3">
                            {stick ? (
                              <svg className="fill-indigo-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                              </svg>
                            ) : (
                              <svg x-show="checked" className="fill-teal-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </button>
                      <button
                        className={`w-full text-left py-3 px-4 border rounded ${
                          highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setHighlight(!highlight);
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-gray-800 font-medium mb-1">Highlight your post in indigo (+$49)</div>
                            <div className="text-sm text-gray-500 italic">2x more views</div>
                          </div>
                          <div className="shrink-0 rounded-full border border-gray-200 ml-3">
                            {highlight ? (
                              <svg className="fill-indigo-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                              </svg>
                            ) : (
                              <svg x-show="checked" className="fill-teal-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="mt-6">
                      <button className="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm">Pay Now - $349</button>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs text-gray-500">
                        By clicking pay you agree to our{' '}
                        <a className="underline" href="#0">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a className="underline" href="#0">
                          Privacy Policy
                        </a>
                        .
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-xl mx-auto">
              <div className="space-y-3 group">
                {/* Testimonial */}
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                  <div className="flex items-center space-x-5">
                    <div className="relative shrink-0">
                      <img className="rounded-full" src={TestimonialAuth04} width="88" height="88" alt="Testimonial 04" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
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
                      <img className="rounded-full" src={TestimonialAuth05} width="88" height="88" alt="Testimonial 05" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
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
                      <img className="rounded-full" src={TestimonialAuth06} width="88" height="88" alt="Testimonial 06" />
                      <svg className="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                      </svg>
                    </div>
                    <figure>
                      <blockquote className="font-bold m-0 pb-1">
                        <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
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

export default PostAJob;
