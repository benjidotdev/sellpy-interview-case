import React from 'react'
import { TextField, Typography, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { calculateRemainingTime, isOverdue } from '../utils/time'

export const TodoItem = ({ index, todo, handleTodoChange, handleDeleteTodo }) => {
  const { description, dueBy } = todo
  const dueByDate = new Date(dueBy)

  return (
    <div style={{ display: 'flex', alignItems: 'end', gap: '1rem' }}>
      <Typography sx={{ margin: '8px' }} variant='h6'>
        {index + 1}
      </Typography>
      <TextField
        sx={{ flexGrow: 1, marginTop: '1rem' }}
        label='What to do?'
        value={description}
        onChange={(event) => handleTodoChange('description', event.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label='Due by'
          value={dueByDate}
          onChange={(date) => handleTodoChange('dueBy', date)}
          slots={{
            textField: (props) => <TextField {...props} />,
          }}
        />
      </LocalizationProvider>
      <Typography
        sx={{ display: 'flex', flexDirection: 'column', margin: '8px', width: '8em' }}
        variant='body2'
      >
        <span>{isOverdue(dueBy) ? 'Overdue by: ' : 'Remaining time: '}</span>
        <span style={{ color: isOverdue(dueBy) ? 'red' : 'inherit' }}>
          {calculateRemainingTime(dueBy)}
        </span>
      </Typography>
      <Button
        sx={{ margin: '8px' }}
        size='small'
        color='secondary'
        onClick={() => handleDeleteTodo(index, todo.id)}
      >
        <DeleteIcon />
      </Button>
    </div>
  )
}
