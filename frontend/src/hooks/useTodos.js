import { useState, useEffect } from 'react';
import { fetchListTodos, saveListTodos } from '../modules/lists'
import { deleteTodo } from '../modules/todos'
import _ from 'lodash'

const useTodos = (listId) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const debouncedListSave = _.debounce(async (listId, todos) => {
    await saveListTodos({ listId, todos });
  }, 200);

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