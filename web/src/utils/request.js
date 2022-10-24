import axios from 'axios';

axios.interceptors.request.use((x) => {
  // to avoid overwriting if another interceptor
  // already defined the same object (meta)
  x.meta = x.meta || {};
  x.meta.requestStartedAt = new Date().getTime();
  return x;
});

axios.interceptors.response.use(
  (x) => {
    x.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
    return x;
  },
  (x) => {
    x.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
    return Promise.reject(x);
  }
);

async function get(endpoint) {
  return axios.get(endpoint);
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.put(endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function del(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.delete(endpoint, {
    data: bodyData,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

const sendRequest = async ({
  method,
  uri,
  password,
  body,
  language,
  db,
  server,
}) => {
  const isDev = import.meta.env.DEV;
  let endpoint;

  if (isDev) {
    endpoint = `http://localhost:5000${uri}/${db}`;
    console.log(`/api/${language}/${server}${uri}/${db}`);
  } else {
    endpoint = `/api/${language}/${server}${uri}/${db}`;
  }

  console.log({ endpoint });

  switch (method) {
    case 'GET':
      return get(endpoint);
    case 'POST':
      return post(endpoint, { content: body });
    case 'PUT':
      return put(endpoint, { content: body, password });
    case 'DELETE':
      return del(endpoint, { password });
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};

export { get, post, put, del };
export default sendRequest;
