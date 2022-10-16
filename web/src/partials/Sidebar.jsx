import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDb, setLanguage, setServer } from "../states/fieldSlice";

function Sidebar() {
  const { language, db, server } = useSelector((state) => state.field);
  const dispatch = useDispatch();

  const onLangChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const onDbChange = (e) => {
    dispatch(setDb(e.target.value));
  };

  const onServerChange = (e) => {
    dispatch(setServer(e.target.value));
  };

  const onClick = () => {
    dispatch(setLanguage("python"));
    dispatch(setDb("pg"));
    dispatch(setServer("apache"));
  };

  return (
    <aside className='mb-8 md:mb-0 md:w-64 lg:w-72 md:ml-12 lg:ml-20 md:shrink-0 md:order-1'>
      <div
        data-sticky=''
        data-margin-top='32'
        data-sticky-for='768'
        data-sticky-wrap=''
      >
        <div className='relative bg-gray-50 rounded-xl border border-gray-200 p-5'>
          <div className='absolute top-5 right-5 leading-none'>
            <button
              className='text-sm font-inter text-indigo-500 hover:underline'
              onClick={onClick}
            >
              초기화
            </button>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-1 gap-6'>
            {/* Language Selection */}
            <div>
              <div className='text-sm text-gray-800 font-semibold mb-3'>
                API 개발 언어
              </div>
              <ul className='space-y-2'>
                <li>
                  <input
                    type='radio'
                    id='langPython'
                    name='lang'
                    value='python'
                    className='hidden peer'
                    checked={language === "python"}
                    onChange={onLangChange}
                    required
                  />
                  <label
                    htmlFor='langPython'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>
                        Python (Flask)
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type='radio'
                    id='langJava'
                    name='lang'
                    value='java'
                    className='hidden peer'
                    checked={language === "java"}
                    onChange={onLangChange}
                  />
                  <label
                    htmlFor='langJava'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>
                        Java (Spring)
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type='radio'
                    id='langTs'
                    name='lang'
                    value='ts'
                    className='hidden peer'
                    checked={language === "ts"}
                    onChange={onLangChange}
                  />
                  <label
                    htmlFor='langTs'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>
                        TS (Fastify)
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            {/* Database Selection */}
            <div>
              <div className='text-sm text-gray-800 font-semibold mb-3'>
                DB 종류
              </div>
              <ul className='space-y-2'>
                <li>
                  <input
                    type='radio'
                    id='dbPg'
                    name='db'
                    value='pg'
                    className='hidden peer'
                    checked={db === "pg"}
                    onChange={onDbChange}
                    required
                  />
                  <label
                    htmlFor='dbPg'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>
                        PostgreSQL
                      </div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type='radio'
                    id='dbMongo'
                    name='db'
                    value='mongodb'
                    checked={db === "mongodb"}
                    onChange={onDbChange}
                    className='hidden peer'
                  />
                  <label
                    htmlFor='dbMongo'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>
                        MongoDB
                      </div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
            {/* Server Selection */}
            <div>
              <div className='text-sm text-gray-800 font-semibold mb-3'>
                서버 종류
              </div>
              <ul className='space-y-2'>
                <li>
                  <input
                    type='radio'
                    id='serverApache'
                    name='server'
                    value='apache'
                    className='hidden peer'
                    checked={server === "apache"}
                    onChange={onServerChange}
                    required
                  />
                  <label
                    htmlFor='serverApache'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>Apache</div>
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type='radio'
                    id='serverNginx'
                    name='server'
                    value='nginx'
                    checked={server === "nginx"}
                    onChange={onServerChange}
                    className='hidden peer'
                  />
                  <label
                    htmlFor='serverNginx'
                    className='inline-flex justify-between items-center p-3 w-9/12 text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-white-500 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
                  >
                    <div className='block'>
                      <div className='w-full text-lg font-semibold'>Nginx</div>
                    </div>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
