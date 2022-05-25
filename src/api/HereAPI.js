const url = 'v1';
const key = process.env.REACT_APP_HERE_APIKEY;

const handleErrors = (resp) => {
  if (!resp.ok) {
    return Promise.reject(resp.status);
  }
  return resp;
};

export const searchPointAPI = (place) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const copyUrl = `${url}/geocode?q=${place}&apiKey=${key}`;
  return fetch(`${copyUrl}`, options)
    .then((resp) => handleErrors(resp))
    .then((resp) => resp.json());
};
