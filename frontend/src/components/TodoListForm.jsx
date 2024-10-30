import React from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { TodoItem } from './TodoItem';
import useTodos from '../hooks/useTodos';

export const TodoListForm = ({ todoList }) => {
  const { id: listId } = todoList;
  const { todos, addTodo, updateTodo, removeTodo } = useTodos(listId);

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
              handleTodoChange={(field, value) => updateTodo(index, field, value)}
              handleDeleteTodo={() => removeTodo(todo.id)}
            />
          ))}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => addTodo()}
            >
              Add Todo
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
};