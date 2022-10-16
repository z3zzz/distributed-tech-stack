import axios from "axios";

axios.interceptors.response.use((x) => {
  x.responseTime = new Date().getTime() - x.config.meta.beginTimer;
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

async function del(endpoint) {
  return axios.delete(endpoint);
}

const sendRequest = async ({ method, uri, body, language, db, server }) => {
  const endpoint = `/api/${server}/${language}/${db}${uri}`;
  console.log({ endpoint });

  switch (method) {
    case "GET":
      await get(endpoint);
    case "POST":
      await post(endpoint, { text: body });
    case "PUT":
      await put(endpoint, { text: body });
    case "DELETE":
      await del(endpoint);
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};

export { get, post, put, del };
export default sendRequest;
