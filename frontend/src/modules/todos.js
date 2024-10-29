import { fetchApi } from './fetchApi.js';

export const saveListTodos = async ({ listId, todos }) => {
  const url = `list/${listId}/todos`;
  const method = 'PUT';
  const data = todos;
  return await fetchApi(url, method, data);
};

export const deleteTodo = async (id) => {
  const url = `todo/${id}`;
  const method = 'DELETE';
  const data = null;
  return await fetchApi(url, method, data);
};