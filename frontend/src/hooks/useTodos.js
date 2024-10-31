import { useState, useEffect } from 'react'
import { fetchListTodos, updateListTodos } from '../modules/lists'

const useTodos = (listId) => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      if (listId) {
        setLoading(true)
        try {
          const data = await fetchListTodos(listId)
          setTodos(data)
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false)
        }
      } else {
        setTodos([])
      }
    }
    fetchTodos()
  }, [listId])

  const addTodo = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    setTodos([...todos, { id: '', description: '', dueBy: tomorrow }])
  }

  const updateTodo = async (index, field, value) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos]
      updatedTodos[index][field] = value
      return updatedTodos
    })

    try {
      await updateListTodos({ listId, todos: [...todos] })
    } catch (error) {
      setTodos((prevTodos) => {
        const newTodos = [...prevTodos]
        newTodos[index][field] = todos[index][field]
        return newTodos
      })
    }
  }

  const removeTodo = async (index) => {
    if (!window.confirm('Are you sure you want to delete this Todo?')) return
    const updatedTodos = [...todos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)

    try {
      await updateListTodos({ listId, todos: updatedTodos })
    } catch (error) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos]
        updatedTodos.splice(index, 0, todos[index])
        return updatedTodos
      })
    }
  }

  return {
    todos,
    setTodos,
    addTodo,
    updateTodo,
    removeTodo,
    loading,
    error,
  }
}

export default useTodos
