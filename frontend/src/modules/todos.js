import { fetchApi } from './fetchApi.js'

export const deleteTodo = async (id) => {
  const url = `todo/${id}`;
  const method = 'DELETE';
  const data = null;
  return await fetchApi(url, method, data);
};