import React, { useState } from 'react'
import { TextField, Card, CardContent, CardActions, Button, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { saveListTodos, deleteTodo } from '../modules/todos'
import { calculateRemainingTime } from '../utils/time'
import _ from 'lodash'

export const TodoListForm = ({ todoList }) => {
  const { id: listId } = todoList
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
          {todos.map((todo, index) => {
            const { id, description, dueBy } = todo
            const dueByDate = new Date(dueBy);
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'end', gap: '1rem' }}>
                <Typography sx={{ margin: '8px' }} variant='h6'>
                  {index + 1}
                </Typography>
                <TextField
                  sx={{ flexGrow: 1, marginTop: '1rem' }}
                  label='What to do?'
                  value={description}
                  onChange={(event) => handleTodoChange(index, 'description', event.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label='Due by'
                    value={dueByDate}
                    onChange={(date) => handleTodoChange(index, 'dueBy', date)}
                    slots={{ textField: (params) => <TextField {...params} /> }}
                  />
                </LocalizationProvider>
                <Typography sx={{ display: 'flex', flexDirection: 'column', margin: '8px' }} variant='body2'>
                  <span>Remaining time: </span>
                  <span>{calculateRemainingTime(dueBy)}</span>
                </Typography>
                <Button
                  sx={{ margin: '8px' }}
                  size='small'
                  color='secondary'
                  onClick={() => handleDeleteTodo(id)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            )
          })}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => handleAddTodo()}
            >
              Add Todo <AddIcon />
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}