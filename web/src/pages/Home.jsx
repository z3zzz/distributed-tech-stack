import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../partials/Header";
import Hero from "../partials/Hero";
import PressLogos from "../partials/PressLogos";
import Sidebar from "../partials/Sidebar";
import JobList from "../partials/JobList";
import Testimonials from "../partials/Testimonials";
import Footer from "../partials/Footer";
import Postman from "../partials/Postman";
import sendRequest from "../utils/request";
import { setBody } from "../states/fieldSlice";

function Home() {
  const { method, uri, password, body, language, db, server } = useSelector(
    (state) => state.field
  );

  const dispatch = useDispatch();

  const [response, setResponse] = useState("Send 버튼을 클릭해 보세요.");
  const [responseTime, setResponseTime] = useState(0);
  const [statusCode, setStatusCode] = useState(200);
  const [statusText, setStatusText] = useState("OK");
  const [hasRequested, setHasRequested] = useState(false);

  const isPortfolioRequired = uri === "/dev/portfolio";
  const [portfolios, setPortfolios] = useState([]);

  const scrollRef = useRef(null);

  const onRequestClick = async () => {
    try {
      const res = await sendRequest({
        method,
        uri,
        password,
        body,
        language,
        db,
        server,
      });

      setResponse(res.data.content);
      setResponseTime(res.responseTime);
      console.log(res.status);
      setStatusCode(res.status);
      setStatusText(res.statusText);
      dispatch(setBody(""));

      if (isPortfolioRequired) {
        setResponse("POPST 요청은 어떠신가요?");
        setPortfolios(res.data);
      } else {
        setPortfolios([]);
      }
    } catch (e) {
      setResponse(
        `요청 중 문제가 발생하였습니다. 

          => ${e.response?.data?.message || e.message}`
      );

      if (e.response) {
        setStatusCode(e.response.status);
        setResponseTime(e.responseTime);

        if (e.response.status.toString().startsWith("4")) {
          setStatusText("Bad Request");
        }
        if (e.response.status.toString().startsWith("5")) {
          setStatusText("Internal Error");
        }
      } else {
        setStatusCode(0);
        setStatusText("Network Error");
      }
    }
  };

  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='grow'>
        {/*  Page sections */}
        <Hero
          onRequestClick={onRequestClick}
          scrollRef={scrollRef}
          setHasRequested={setHasRequested}
        />
        <PressLogos />

        {/*  Page content */}
        <section>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='py-8 md:py-16'>
              <div className='md:flex md:justify-between' data-sticky-container>
                <Sidebar />

                {/* Main content */}
                <div className='md:grow'>
                  <Postman
                    response={response}
                    responseTime={responseTime}
                    statusCode={statusCode}
                    statusText={statusText}
                    onRequestClick={onRequestClick}
                    scrollRef={scrollRef}
                    hasRequested={hasRequested}
                    setHasRequested={setHasRequested}
                    isPortfolioRequired={isPortfolioRequired}
                  />

                  {isPortfolioRequired && <JobList portfolios={portfolios} />}
                  {/* Main content 
                  <Testimonials />

                  */}
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
