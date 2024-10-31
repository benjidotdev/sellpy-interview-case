import { fetchApi } from './fetchApi'

export const deleteTodo = async (id) => {
  const url = `todo`
  const method = 'DELETE'
  const data = { id }
  return await fetchApi(url, method, data)
}
