import { fetchApi } from './fetchApi'

export const fetchLists = async () => {
  return await fetchApi({ url: 'list' })
}

export const fetchListTodos = async (listId) => {
  return await fetchApi({ url: `list/${listId}/todos` })
}

export const updateListTodos = async ({ listId, todos }) => {
  return await fetchApi({ url: `list/${listId}/todos`, method: 'PUT', data: todos })
}
