import React, { useState } from 'react'
import { TextField, Card, CardContent, CardActions, Button, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { saveListTodos, deleteTodo } from '../modules/todos'
import { calculateRemainingTime } from '../utils/time'

export const TodoListForm = ({ todoList }) => {
  const [todos, setTodos] = useState([...todoList.todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: '', description: '', dueBy: new Date() }]);
  };

  const handleInputChange = (index, event) => {
    const updatedTodos = [...todos];
    updatedTodos[index].description = event.target.value;
    setTodos(updatedTodos);
  };

  const handleDueByChange = (index, date) => {
    const updatedTodos = [...todos];
    updatedTodos[index].dueBy = date;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await saveListTodos({ listId: todoList.id, todos });
  };

  return (
    <Card sx={{ margin: '0 1rem' }}>
      <CardContent>
        <Typography component='h2'>{todoList.title}</Typography>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        >
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
                  onChange={(event) => handleInputChange(index, event)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label='Due by'
                    value={dueByDate}
                    onChange={(date) => handleDueByChange(index, date)}
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
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}