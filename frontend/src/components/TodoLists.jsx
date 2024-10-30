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

export const TodoLists = ({ style }) => {
  const { lists, setLists, activeList, setActiveList, error } = useLists();

  if (!Object.keys(lists).length) return <div>No Lists</div>

  if (error) return <div>Something went wrong</div>

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