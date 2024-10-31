import { fetchApi } from './fetchApi'

export const fetchLists = async () => {
  return await fetchApi('list')
}

export const fetchListTodos = async (listId) => {
  return await fetchApi(`list/${listId}/todos`)
}

export const updateListTodos = async ({ listId, todos }) => {
  return await fetchApi(`list/${listId}/todos`, 'PUT', todos)
}
