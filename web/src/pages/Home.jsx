import React from 'react';

import Header from '../partials/Header';
import Hero from '../partials/Hero';
import PressLogos from '../partials/PressLogos';
import Sidebar from '../partials/Sidebar';
import JobList from '../partials/JobList';
import Testimonials from '../partials/Testimonials';
import Footer from '../partials/Footer';
import Postman from '../partials/Postman';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
        <PressLogos />

        {/*  Page content */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-8 md:py-16">
              <div className="md:flex md:justify-between" data-sticky-container>

                <Sidebar />

                {/* Main content */}
                <div className="md:grow">
                  <Postman />
                  <JobList />
                  <Testimonials />

                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
