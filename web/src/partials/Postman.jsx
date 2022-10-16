import React, { useState } from 'react';

function Postman() {

  const [remoteJob, setRemoteJob] = useState(false);

  return (
    <>
      {/* Searchbox */}
      <div className="flex">
        <select className="px-4 py-3 w-32 bg-gray-100 block rounded-l-md border-transparent focus:border-slate-300 focus:bg-white focus:ring-0">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <select className="px-4 py-3 flex-1 block bg-gray-100 border-transparent focus:border-slate-300 focus:bg-white focus:ring-0" >
          <option value="GET">/저의이야기/자기소개</option>
          <option value="GET">/저의이야기/좋아하는 웹툰</option>
          <option value="GET">/저의이야기/좋아하는 만화</option>
          <option value="GET">/저의이야기/개발자 커리어를 시작한 이유</option>
          <option value="GET">/저의이야기/개발자가 되어서 좋은 점</option>
          <option value="GET">/저의이야기/지니고 있는 능력</option>
          <option value="GET">/개발/지금까지 해 온 노력</option>
          <option value="GET">/개발/문제를 해결하는 방법</option>
          <option value="GET">/개발/기술 스택</option>
          <option value="GET">/개발/본 사이트의 아키텍쳐</option>
          <option value="POST">/참여/저의 사이트를 방문해 주신 계기</option>
          <option value="POST">/참여/방문 후기</option>
          <option value="POST">/참여/재미있었던 콘텐츠</option>
          <option value="POST">/참여/더 궁금한 콘텐츠</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 block text-white font-bold ml-2 py-2 px-4 rounded-md">
          Send
        </button>
      </div>
      
      {/* Textarea for POST, PATCH*/}
      <div>
        <textarea id="message" rows="4" className="mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-transparent focus:border-slate-300 min-h-[5rem]" placeholder="자유롭게 입력해 주세요."></textarea>
      </div>

      {/* Response */}
      <div className='flex mt-10'>
        <h2 className="text-3xl font-bold font-inter text-left block flex-1">Response <span className='text-sm text-gray-400 font-medium'> (0.5s)</span> </h2> 
        <span className='text-sm text-gray-400 font-medium block pt-4'>Status: &nbsp;</span>     
        <span className='text-sm text-green-500 font-medium block pt-4'> 200 &nbsp;ok</span>     
      </div>
      {/* Main content */}
      <div className="md:grow mt-4">
        <div className="pb-8">
          {/* Job description */}
          <div className="space-y-8 mb-8">
              <div className="text-gray-500 space-y-3">
                <p>In the world of AI, behavioural predictions are leading the charge to better machine learning.</p>
                <p>
                  There is so much happening in the AI space. Advances in the economic sectors have seen automated business practices
                  rapidly increasing economic value. While the realm of the human sciences has used the power afforded by computational
                  capabilities to solve many human based dilemmas. Even the art scene has adopted carefully selected ML applications to
                  usher in the technological movement.
                </p>
                <p>
                  As a Senior Client Engineer, you'll work alongside other engineers, designers, and product managers to tackle everything
                  from huge company initiatives to modest but important bug fixes, from start to finish. You'll also collaborate with your
                  product team on discovery, helping to assess the direction and feasibility of product changes. And, perhaps most
                  importantly, you'll actively contribute to the evolution of the culture and processes of a growing engineering team.
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Postman;
