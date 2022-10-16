import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBody, setMethod, setUri } from "../states/fieldSlice";

function Postman({
  response,
  responseTime,
  statusCode,
  statusText,
  onRequestClick,
  scrollRef,
}) {
  const dispatch = useDispatch();
  const { method, body } = useSelector((state) => state.field);

  const isBodyRequired = method === "POST" || method === "PUT";
  const isOk = statusCode.toString().startsWith("2");

  const onMethodChange = (e) => {
    dispatch(setMethod(e.target.value));
  };

  const onUriChange = (e) => {
    dispatch(setUri(e.target.value));
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
          <option value='/self/introduction'>/저의이야기/자기소개</option>
          <option value='/self/webtoon'>/저의이야기/좋아하는 웹툰</option>
          <option value='/self/cartoon'>/저의이야기/좋아하는 만화</option>
          <option value='/self/whyDeveloperCareer'>
            /저의이야기/개발자 커리어를 시작한 이유
          </option>
          <option value='/self/goodPointOfDeveloper'>
            /저의이야기/개발자가 되어서 좋은 점
          </option>
          <option value='/self/myAbility'>/저의이야기/지니고 있는 능력</option>
          <option value='/self/effort'>/개발/지금까지 해 온 노력</option>
          <option value='/self/howToSolveProblem'>
            /개발/문제를 해결하는 방법
          </option>
          <option value='/dev/techStack'>/개발/기술 스택</option>
          <option value='/dev/architecture'>/개발/본 사이트의 아키텍쳐</option>
          <option value='/participate/whyVisit'>
            /참여/저의 사이트를 방문해 주신 계기
          </option>
          <option value='/participate/review'>/참여/방문 후기</option>
          <option value='/participate/funContent'>
            /참여/재미있었던 콘텐츠
          </option>
          <option value='/participate/question'>/참여/더 궁금한 콘텐츠</option>
        </select>
        <button
          className='bg-blue-500 hover:bg-blue-700 block text-white font-bold ml-2 py-2 px-4 rounded-md'
          onClick={onRequestClick}
        >
          Send
        </button>
      </div>

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
            ({responseTime} s)
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
            <p>{response}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postman;
