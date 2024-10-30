import { fetchApi } from './fetchApi.js'

export const saveListTodos = async ({ listId, todos }) => {
  const filteredTodos = todos.filter((todo) => todo.description.trim() !== '');
  const url = `list/${listId}/todos`;
  const method = 'PUT';
  console.log(filteredTodos);
  return await fetchApi(url, method, filteredTodos);
};

export const deleteTodo = async (id) => {
  const url = `todo/${id}`;
  const method = 'DELETE';
  const data = null;
  return await fetchApi(url, method, data);
};