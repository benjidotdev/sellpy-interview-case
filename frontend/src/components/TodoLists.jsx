import React, { Fragment } from 'react'
import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { TodoListForm } from './TodoListForm'
import useLists from '../hooks/useLists'

const StateCard = ({ state, style }) => {
  const stateText = state === 'loading' ? 'Loading...' : 'Error'

  return (
    <Fragment>
      <Card style={style}>
        <CardContent>
          <Typography component='h2'>{stateText}</Typography>
        </CardContent>
      </Card>
    </Fragment>
  )
}

export const TodoLists = ({ style }) => {
  const { lists, setLists, activeList, setActiveList, loading, error } = useLists()

  if (loading) {
    return <StateCard state='loading' style={style} />
  }

  if (error) {
    return <StateCard state='error' style={style} />
  }

  return (
    <Fragment>
      <Card style={style}>
        <CardContent>
          <Typography component='h2'>My Todo Lists</Typography>
          <List>
            {Object.keys(lists).map((key) => (
              <ListItemButton key={key} onClick={() => setActiveList(key)}>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary={lists[key].title} />
              </ListItemButton>
            ))}
          </List>
        </CardContent>
      </Card>
      {lists[activeList] && (
        <TodoListForm
          key={activeList}
          todoList={lists[activeList]}
          saveTodoList={(id, { todos }) => {
            const listToUpdate = lists[id]
            setLists({
              ...lists,
              [id]: { ...listToUpdate, todos },
            })
          }}
        />
      )}
    </Fragment>
  )
}
