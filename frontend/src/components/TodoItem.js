import React from 'react';
import { TextField, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { calculateRemainingTime } from '../utils/time'

export const TodoItem = ({ todo, index, handleTodoChange, handleDeleteTodo }) => {
  const { id, description, dueBy } = todo;
  const dueByDate = new Date(dueBy);

  return (
    <div style={{ display: 'flex', alignItems: 'end', gap: '1rem' }}>
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
  );
};