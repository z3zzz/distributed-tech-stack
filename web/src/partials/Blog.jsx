import React from 'react';

import Post01 from '../images/blog-01.jpg';
import Post02 from '../images/blog-02.jpg';
import Post03 from '../images/blog-03.jpg';
import PostAuthor01 from '../images/blog-author-01.jpg';
import PostAuthor02 from '../images/blog-author-02.jpg';
import PostAuthor03 from '../images/blog-author-03.jpg';

function Blog() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk text-center md:text-left">From our blog</h2>
          </div>
          {/* Posts */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {/* 1st Post */}
            <article className="h-full flex flex-col space-y-5" data-aos="fade-down">
              {/* Image */}
              <a className="block group overflow-hidden" href="#0">
                <img className="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out" src={Post01} width="347" height="198" alt="Post 01" />
              </a>
              {/* Content */}
              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
                    <a className="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Concept Art &amp; Illustrations by Stef Euphoria</a>
                  </h3>
                </header>
                <p className="text-gray-500 grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <footer className="flex items-center text-sm mt-4">
                  <a href="#0">
                    <img className="rounded-full shrink-0 mr-3" src={PostAuthor01} width="32" height="32" alt="Author 01" />
                  </a>
                  <div>
                    <span className="text-gray-500">By</span> <a className="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Knut Mayer</a>
                  </div>
                </footer>
              </div>
            </article>
            {/* 2nd Post */}
            <article className="h-full flex flex-col space-y-5" data-aos="fade-down" data-aos-delay="100">
              {/* Image */}
              <a className="block group overflow-hidden" href="#0">
                <img className="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out" src={Post02} width="347" height="198" alt="Post 02" />
              </a>
              {/* Content */}
              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
                    <a className="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Patrick Chen's Branding by Thought &amp; Found Studio</a>
                  </h3>
                </header>
                <p className="text-gray-500 grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <footer className="flex items-center text-sm mt-4">
                  <a href="#0">
                    <img className="rounded-full shrink-0 mr-3" src={PostAuthor02} width="32" height="32" alt="Author 02" />
                  </a>
                  <div>
                    <span className="text-gray-500">By</span> <a className="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Samuel Regan</a>
                  </div>
                </footer>
              </div>
            </article>
            {/* 3rd Post */}
            <article className="h-full flex flex-col space-y-5" data-aos="fade-down" data-aos-delay="200">
              {/* Image */}
              <a className="block group overflow-hidden" href="#0">
                <img className="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out" src={Post03} width="347" height="198" alt="Post 03" />
              </a>
              {/* Content */}
              <div className="grow flex flex-col">
                <header>
                  <h3 className="h4 font-cabinet-grotesk font-bold mb-2">
                    <a className="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Soma Brewing Branding &amp; Packaging by Quim Martin</a>
                  </h3>
                </header>
                <p className="text-gray-500 grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <footer className="flex items-center text-sm mt-4">
                  <a href="#0">
                    <img className="rounded-full shrink-0 mr-3" src={PostAuthor03} width="32" height="32" alt="Author 03" />
                  </a>
                  <div>
                    <span className="text-gray-500">By</span> <a className="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Fabian Centero</a>
                  </div>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
