import axios from "axios";

async function get(uri) {
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

async function patch(endpoint, data) {
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

export default request = ({ method, uri, body, language, db, server }) => {};
