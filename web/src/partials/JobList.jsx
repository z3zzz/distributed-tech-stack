import React from "react";

import JobItem from "../partials/JobItem";
//import Newsletter from "../partials/Newsletter";

import Image01 from "../images/portfolio-db3.jpg";
import Image02 from "../images/portfolio-postman2.jpg";
import Image03 from "../images/portfolio-code.png";
import Image04 from "../images/portfolio-ethereum.png";
import Image05 from "../images/portfolio-kafka2.jpg";
import Image06 from "../images/portfolio-migration6.png";
import Image07 from "../images/portfolio-latency.png";
import Image08 from "../images/portfolio-ecommerce3.png";
import Image09 from "../images/portfolio-sns3.png";

const images = [
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
  Image09,
];
const stickyArray = [true, true, true, true, false, false, true, false, true];

function JobList({ portfolios }) {
  return (
    <div className='pb-8 md:pb-16'>
      {/* List container */}
      <div className='flex flex-col'>
        {portfolios.map(({ id, title, content, githubLink, techStack }) => {
          return (
            <JobItem
              key={id}
              sticky={stickyArray[id - 1]}
              title={title}
              slug={githubLink}
              name={content}
              image={images[id - 1]}
              tags={techStack}
            />
          );
        })}
      </div>
    </div>
  );
}

export default JobList;
