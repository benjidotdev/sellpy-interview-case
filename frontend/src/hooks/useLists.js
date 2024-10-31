import { useState, useEffect } from 'react'
import { fetchTodoLists } from '../modules/lists'

const useLists = () => {
  const [lists, setLists] = useState({})
  const [activeList, setActiveList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchLists = async () => {
      setLoading(true)
      try {
        const data = await fetchTodoLists()
        setLists(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchLists()
  }, [])

  return { lists, setLists, activeList, setActiveList, loading, error }
}

export default useLists
