import React from "react";
import { Link } from "react-router-dom";

function JobItem(props) {
  return (
    <div
      className={
        "[&:nth-child(-n+12)]:-order-1 group border border-gray-200 mb-4"
      }
    >
      <div className={`px-4 py-6 `}>
        <div className='sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5'>
          <div className='shrink-0'>
            <img src={props.image} width='60' height='60' alt={props.name} />
          </div>
          <div className='grow lg:flex items-center justify-between space-y-5 lg:space-x-2 lg:space-y-0'>
            <div>
              <div className='mb-2'>
                <a
                  className='text-lg text-gray-800 font-bold'
                  href={props.slug}
                  target='_blank'
                >
                  {props.sticky && (
                    <svg
                      className='w-3 h-3 shrink-0 fill-amber-400'
                      viewBox='0 0 12 12'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M11.143 5.143A4.29 4.29 0 0 1 6.857.857a.857.857 0 0 0-1.714 0A4.29 4.29 0 0 1 .857 5.143a.857.857 0 0 0 0 1.714 4.29 4.29 0 0 1 4.286 4.286.857.857 0 0 0 1.714 0 4.29 4.29 0 0 1 4.286-4.286.857.857 0 0 0 0-1.714Z' />
                    </svg>
                  )}
                  {props.title}
                </a>
              </div>
              <div className='flex propss-start space-x-2 mb-3'>
                <div
                  className='text-sm text-gray-900 font-medium mb-1'
                  style={{ fontSize: 15 }}
                >
                  {props.name}
                </div>
              </div>
              <div className='-m-1'>
                {props.tags.map((tag) => (
                  <a
                    key={tag}
                    className={`text-xs text-gray-500 font-medium inline-flex px-2 py-0.5 hover:text-gray-600 rounded-md m-1 whitespace-nowrap transition duration-150 ease-in-out bg-indigo-50 bg-green-100`}
                    href='#0'
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
            <div className='min-w-[120px] flex items-center lg:justify-end space-x-3 lg:space-x-0'>
              <div className='lg:hidden group-hover:lg:block'>
                <a
                  className='btn-sm py-1.5 px-3 text-white bg-indigo-500 hover:bg-indigo-600 group shadow-sm'
                  href={props.slug}
                  target='_blank'
                >
                  ?????? ????????????{" "}
                  <span className='tracking-normal text-indigo-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1'>
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
