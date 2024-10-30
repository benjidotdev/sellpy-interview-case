import { useState, useEffect, useRef } from 'react'
import { fetchListTodos, updateListTodos } from '../modules/lists'
import { deleteTodo } from '../modules/todos'
import _ from 'lodash'

const useTodos = (listId) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedListRef = useRef(null);

  useEffect(() => {
    const fetchTodos = async () => {
      if (listId) {
        setLoading(true);
        try {
          const data = await fetchListTodos(listId);
          setTodos(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      } else {
        setTodos([]);
      }
    };
    fetchTodos();
  }, [listId]);

  const addTodo = () => {
    setTodos([...todos, { id: '', description: '', dueBy: new Date() }]);
  };

  const removeTodo = async (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const debouncedListSave = (listId, todos) => {
    if (!debouncedListRef.current || debouncedListRef.current.listId !== listId) {
      debouncedListRef.current = {
        listId,
        debouncedSave: _.debounce((listId, todos) => updateListTodos({ listId, todos }), 200),
      };
    }
    debouncedListRef.current.debouncedSave(listId, todos);
  };

  const handleTodoChange = (index, field, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index][field] = value;
    setTodos(updatedTodos);
    debouncedListSave(listId, updatedTodos);
  };

  return {
    todos,
    setTodos,
    addTodo,
    removeTodo,
    updateTodo: handleTodoChange,
    loading,
    error,
  };
};

export default useTodos;