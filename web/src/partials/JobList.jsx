import React from "react";

import JobItem from "../partials/JobItem";
import Newsletter from "../partials/Newsletter";

import Image01 from "../images/portfolio-db.png";
import Image02 from "../images/portfolio-postman.png";
import Image03 from "../images/portfolio-code.png";
import Image04 from "../images/portfolio-ethereum.png";
import Image05 from "../images/portfolio-distributed.png";
import Image06 from "../images/portfolio-migration.jpg";
import Image07 from "../images/portfolio-latency2.png";
import Image08 from "../images/portfolio-ecommerce.png";
import Image09 from "../images/portfolio-food.jpg";

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
  console.log({ portfolios });
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
