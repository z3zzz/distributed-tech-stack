import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBody, setPassword, setMethod, setUri } from "../states/fieldSlice";
import { choices } from "../utils/choices";

function Postman({
  response,
  responseTime,
  statusCode,
  statusText,
  onRequestClick,
  scrollRef,
  hasRequested,
  setHasRequested,
  isPortfolioRequired,
}) {
  const dispatch = useDispatch();
  const { method, password, body } = useSelector((state) => state.field);

  const isBodyRequired = method === "POST" || method === "PUT";
  const isGet = method === "GET";
  const isPost = method === "POST";
  const isPut = method === "PUT";
  const isDelete = method === "DELETE";

  const isPasswordRequired = isPut || isDelete;
  const isOk = statusCode.toString().startsWith("2");

  const onMethodChange = (e) => {
    const method = e.target.value;
    const firstChoice = choices.find((choice) =>
      choice.method.includes(method)
    );

    dispatch(setMethod(method));
    dispatch(setUri(firstChoice.uri));
  };

  const onUriChange = (e) => {
    dispatch(setUri(e.target.value));
  };

  const onPasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  const onBodyChange = (e) => {
    dispatch(setBody(e.target.value));
  };

  const onClick = async () => {
    setHasRequested(true);
    await onRequestClick();
  };

  return (
    <>
      {/* Searchbox */}
      <div className='flex flex-wrap' ref={scrollRef}>
        <select
          className='px-4 py-3 flex-1 pr-[2rem] sm:flex-none sm:w-32 mb-2 bg-gray-100 block rounded-l-md border-transparent focus:border-slate-300 focus:bg-white focus:ring-0'
          onChange={onMethodChange}
        >
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
        <select
          className='px-4 py-3 pr-[2rem] grow block bg-gray-100 mb-2 border-transparent focus:border-slate-300 focus:bg-white focus:ring-0'
          onChange={onUriChange}
        >
          {isGet && (
            <>
              {choices
                .filter(({ method }) => method.includes("GET"))
                .map(({ uri, kor }) => (
                  <option key={uri} value={uri}>
                    {kor}
                  </option>
                ))}
            </>
          )}
          {isPost && (
            <>
              {choices
                .filter(({ method }) => method.includes("POST"))
                .map(({ uri, kor }) => (
                  <option key={uri} value={uri}>
                    {kor}
                  </option>
                ))}
            </>
          )}
          {isPut && (
            <>
              {choices
                .filter(({ method }) => method.includes("PUT"))
                .map(({ uri, kor }) => (
                  <option key={uri} value={uri}>
                    {kor}
                  </option>
                ))}
            </>
          )}
          {isDelete && (
            <>
              {choices
                .filter(({ method }) => method.includes("DELETE"))
                .map(({ uri, kor }) => (
                  <option key={uri} value={uri}>
                    {kor}
                  </option>
                ))}
            </>
          )}
        </select>
        <button
          className='bg-blue-500 hover:bg-blue-700 block mb-2 text-white flex-1 sm:flex-none font-bold lg:ml-2 py-2 px-4 rounded-md'
          onClick={onClick}
        >
          Send
        </button>
      </div>
      {/* Password for PATCH, DELETE*/}
      {isPasswordRequired && (
        <div>
          <input
            id='password'
            type='password'
            className='mt-3 block p-1 pl-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-transparent focus:border-slate-300'
            placeholder='??????????????? ???????????????.'
            value={password}
            onChange={onPasswordChange}
          />
        </div>
      )}
      {/* Textarea for POST, PATCH*/}
      {isBodyRequired && (
        <div>
          <textarea
            id='message'
            rows='4'
            className='mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-transparent focus:border-slate-300 min-h-[5rem]'
            placeholder='???????????? ????????? ?????????.'
            value={body}
            onChange={onBodyChange}
          ></textarea>
        </div>
      )}
      {/* Response */}
      <div className='flex mt-10'>
        <h2 className='text-3xl font-bold font-inter text-left block flex-1'>
          Response{" "}
          <span className='text-sm text-gray-400 font-medium'>
            {" "}
            ({responseTime} ms)
          </span>{" "}
        </h2>
        <span className='text-sm text-gray-400 font-medium block pt-3'>
          Status: &nbsp;
        </span>
        {hasRequested && isOk && (
          <span className='text-sm text-green-500 font-medium block pt-3'>
            {" "}
            {statusCode} &nbsp;{statusText}
          </span>
        )}
        {hasRequested && !isOk && (
          <span className='text-sm text-red-500 font-medium block pt-3'>
            {" "}
            {statusCode} &nbsp;{statusText}
          </span>
        )}
      </div>
      {/* Main content */}
      <div className='md:grow mt-4'>
        {!isPortfolioRequired && (
          <div className='min-h-[13rem]'>
            {/* Job description */}
            <div className='text-gray-700 space-y-3'>
              <p className='whitespace-pre-line'>
                {response ||
                  "?????? ????????? ???????????? ???????????????. \n??? ???????????? ??? ??????????????? :)"}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Postman;
