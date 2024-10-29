const baseUrl = 'http://localhost:3000/api/';
const apiVersion = 'v1/';

export const fetchApi = async (url, method, data) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(baseUrl + apiVersion + url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};