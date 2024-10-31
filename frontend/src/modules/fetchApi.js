import { API_URL, API_VERSION } from '../constants'

export const fetchApi = async ({ url, method = 'GET', data }) => {
  const options = {
    method,
  }

  if (data) {
    options.headers = {
      'Content-Type': 'application/json',
    }
    options.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(API_URL + API_VERSION + url, options)
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
