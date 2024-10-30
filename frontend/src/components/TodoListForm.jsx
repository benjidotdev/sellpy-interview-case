import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { TodoItem } from './TodoItem';
import { saveListTodos, deleteTodo } from '../modules/todos';
import _ from 'lodash';

export const TodoListForm = ({ todoList }) => {
  const { id: listId } = todoList;
  const [todos, setTodos] = useState([...todoList.todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: '', description: '', dueBy: new Date() }]);
  };

  const debouncedSave = _.debounce(async (listId, todos) => {
    await saveListTodos({ listId, todos });
  }, 200);

  const handleTodoChange = (index, field, value) => {
    const updatedTodos = [...todos];
    updatedTodos[index][field] = value;
    setTodos(updatedTodos);
    debouncedSave(listId, updatedTodos);
  };

  const handleDeleteTodo = async (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <Card sx={{ margin: '0 1rem' }}>
      <CardContent>
        <Typography component='h2'>{todoList.title}</Typography>
        <form style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              handleTodoChange={handleTodoChange}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => handleAddTodo()}
            >
              Add Todo
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};