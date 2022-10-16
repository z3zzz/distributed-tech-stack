import React from 'react';

import CreativesImg from '../images/creatives.jpg';
import Creative01 from '../images/creative-01.jpg';
import Creative02 from '../images/creative-02.jpg';
import Creative03 from '../images/creative-03.jpg';
import Creative04 from '../images/creative-04.jpg';
import CreativeBg01 from '../images/creative-bg-01.jpg';
import CreativeBg02 from '../images/creative-bg-02.jpg';
import CreativeBg03 from '../images/creative-bg-03.jpg';
import CreativeBg04 from '../images/creative-bg-04.jpg';

function Creatives() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Join over 2M creatives from around the world</h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="md:w-1/2" data-aos-id-cards>
              <div className="flex space-x-6">
                {/* Column 1 */}
                <div className="w-1/2 space-y-6">
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                    <img className="w-full h-16 object-cover opacity-60" src={CreativeBg01} width="258" height="64" alt="Creative 01 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <img className="inline-flex rounded-full" src={Creative01} width="64" height="64" alt="Creative 01" />
                        <svg className="absolute top-0 right-0" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            className="fill-blue-500"
                            d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                          />
                          <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          Daniel Khan
                        </a>
                        <div className="text-sm font-medium text-gray-500">@art-daniel-k</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos="fade-right" data-aos-anchor="[data-aos-id-cards]" data-aos-delay="200">
                    <img className="w-full h-16 object-cover opacity-60" src={CreativeBg02} width="258" height="64" alt="Creative 02 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <img className="inline-flex rounded-full" src={Creative02} width="64" height="64" alt="Creative 01" />
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          Daniel Khan
                        </a>
                        <div className="text-sm font-medium text-gray-500">@art-daniel-k</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="w-1/2 mt-6 space-y-6">
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos="fade-left" data-aos-anchor="[data-aos-id-cards]" data-aos-delay="100">
                    <img className="w-full h-16 object-cover opacity-60" src={CreativeBg03} width="258" height="64" alt="Creative 03 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <img className="inline-flex rounded-full" src={Creative03} width="64" height="64" alt="Creative 01" />
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          Daniel Khan
                        </a>
                        <div className="text-sm font-medium text-gray-500">@art-daniel-k</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos="fade-up" data-aos-anchor="[data-aos-id-cards]" data-aos-delay="300">
                    <img className="w-full h-16 object-cover opacity-60" src={CreativeBg04} width="258" height="64" alt="Creative 04 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <img className="inline-flex rounded-full" src={Creative04} width="64" height="64" alt="Creative 01" />
                        <svg className="absolute top-0 right-0" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                          <path
                            className="fill-blue-500"
                            d="M20 10.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.874 3.874 0 0 1-1.351 1.551A3.359 3.359 0 0 1 10 20a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.33 3.33 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.621 3.621 0 0 1 .5 12.41 3.916 3.916 0 0 1 0 10.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247A3.874 3.874 0 0 1 8.07.594 3.388 3.388 0 0 1 10 0c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.33 3.33 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048Z"
                          />
                          <path className="fill-white" d="M14.8 8.4 13.4 7l-4 4-2-2L6 10.4l3.4 3.4z" />
                        </svg>
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          Daniel Khan
                        </a>
                        <div className="text-sm font-medium text-gray-500">@art-daniel-k</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Follow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="text-center md:text-left">
                <img className="inline-block mb-12" src={CreativesImg} width="330" height="181" alt="Creatives" />
                <h3 className="h3 font-cabinet-grotesk text-4xl mb-4">More than a community</h3>
                <p className="text-xl text-gray-500 mb-6">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking.
                </p>
                <div>
                  <a className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm" href="signup.html">
                    Join The Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creatives;
