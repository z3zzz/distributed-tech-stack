import axios from "axios";

axios.interceptors.request.use((x) => {
  // to avoid overwriting if another interceptor
  // already defined the same object (meta)
  x.meta = x.meta || {};
  x.meta.requestStartedAt = new Date().getTime();
  return x;
});

axios.interceptors.response.use((x) => {
  console.log(x.config.meta.requestStartedAt);
  x.responseTime = new Date().getTime() - x.config.meta.requestStartedAt;
  console.log({ responseTime: x.responseTime });
  return x;
});

async function get(endpoint) {
  return axios.get(endpoint);
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.post(endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.put(endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function del(endpoint, data) {
  const bodyData = JSON.stringify(data);

  return axios.delete(endpoint, { data: bodyData });
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
    endpoint = `http://localhost:5000${uri}`;
  } else {
    endpoint = `/api/${server}/${language}/${db}${uri}`;
  }

  console.log({ endpoint, method });

  switch (method) {
    case "GET":
      return get(endpoint);
    case "POST":
      return post(endpoint, { text: body });
    case "PUT":
      return put(endpoint, { text: body, password });
    case "DELETE":
      return del(endpoint, { password });
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};

export { get, post, put, del };
export default sendRequest;
