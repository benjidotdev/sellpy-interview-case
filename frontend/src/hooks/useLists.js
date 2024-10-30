// useLists.js
import { useState, useEffect } from 'react'
import { fetchTodoLists } from '../modules/lists'

const useLists = () => {
  const [lists, setLists] = useState({})
  const [activeList, setActiveList] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await fetchTodoLists()
        setLists(data)
      } catch (error) {
        setError(error)
      }
    }
    fetchLists()
  }, [])

  return { lists, setLists, activeList, setActiveList, error }
}

export default useLists
