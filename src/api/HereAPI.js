const url = 'v1';
const key = 'FEfmqtjLKMfVzGJCcIY-VesoZYO7kTWAnkliyfX548w';

const handleErrors = (resp) => {
  if (!resp.ok) {
    return Promise.reject(resp.status);
  }
  return resp;
};

// export const saveOrdersAPI = (data) => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   return fetch(`${url}/orders`, options)
//     .then((resp) => handleErrors(resp))
//     .then((resp) => resp.json());
// };

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
