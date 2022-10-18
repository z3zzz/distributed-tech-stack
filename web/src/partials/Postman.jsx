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

  return (
    <>
      {/* Searchbox */}
      <div className='flex' ref={scrollRef}>
        <select
          className='px-4 py-3 w-32 bg-gray-100 block rounded-l-md border-transparent focus:border-slate-300 focus:bg-white focus:ring-0'
          onChange={onMethodChange}
        >
          <option value='GET'>GET</option>
          <option value='POST'>POST</option>
          <option value='PUT'>PUT</option>
          <option value='DELETE'>DELETE</option>
        </select>
        <select
          className='px-4 py-3 flex-1 block bg-gray-100 border-transparent focus:border-slate-300 focus:bg-white focus:ring-0'
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
          className='bg-blue-500 hover:bg-blue-700 block text-white font-bold ml-2 py-2 px-4 rounded-md'
          onClick={onRequestClick}
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
            className='mt-5 block p-1 pl-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-transparent focus:border-slate-300'
            placeholder='비밀번호가 필요합니다.'
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
            placeholder='자유롭게 입력해 주세요.'
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
        {isOk && (
          <span className='text-sm text-green-500 font-medium block pt-3'>
            {" "}
            {statusCode} &nbsp;{statusText}
          </span>
        )}
        {!isOk && (
          <span className='text-sm text-red-500 font-medium block pt-3'>
            {" "}
            {statusCode} &nbsp;{statusText}
          </span>
        )}
      </div>
      {/* Main content */}
      <div className='md:grow mt-4'>
        <div className='min-h-[13rem]'>
          {/* Job description */}
          <div className='text-gray-500 space-y-3'>
            <p className='whitespace-pre-line'>{response}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postman;
