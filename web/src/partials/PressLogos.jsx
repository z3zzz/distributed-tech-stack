import React from 'react';

import javaImg from '../images/stack-java.svg';
import nodeImg from '../images/stack-node.svg'
import nginxImg from '../images/stack-nginx.svg';
import apacheImg from '../images/stack-apache.svg';
import pythonImg from '../images/stack-python.svg';
import mongodbImg from '../images/stack-mongodb.svg';
import pgImg from '../images/stack-postgresql.svg';
import tsImg from '../images/stack-typescript.svg';

function PressLogos() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 lg:py-4 border-b border-gray-200">
          {/* Items */}
          <div className="flex flex-wrap items-center justify-around text-center">
            {/* Trusted by */}
            <div className="w-full lg:w-auto py-3 px-2 lg:py-2">
              <div className="font-nanum text-4xl text-indigo-500 whitespace-nowrap">제가 좋아하는 기술</div>
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={pythonImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="60"
                alt="pythonImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={javaImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="60"
                alt="javaImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={nodeImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="60"
                alt="nodeImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={tsImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="60"
                alt="tsImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={pgImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="60"
                alt="pgImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={mongodbImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="40"
                alt="mongodbImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={nginxImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="60"
                alt="nginxImg"
              />
            </div>

            {/* Item */}
            <div className="w-1/2 sm:w-1/3 lg:w-auto py-3 px-2 lg:py-2">
              <img src={apacheImg}
                className="inline-flex max-w-full fill-gray-400 -mt-1.5"
                width="40"
                alt="apacheImg"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PressLogos;
