import { fetchApi } from './fetchApi'

export const fetchTodoLists = async () => {
  const url = 'list';
  const method = 'GET';
  const data = null;
  return await fetchApi(url, method, data);
};