import { fetchApi } from './fetchApi.js'

export const fetchTodoLists = async () => {
  const url = 'list';
  const method = 'GET';
  const data = null;
  return await fetchApi(url, method, data);
};

export const saveListTodos = async ({ listId, todos }) => {
  const filteredTodos = todos.filter((todo) => todo.description.trim() !== '');
  const url = `list/${listId}/todos`;
  const method = 'PUT';
  return await fetchApi(url, method, filteredTodos);
};