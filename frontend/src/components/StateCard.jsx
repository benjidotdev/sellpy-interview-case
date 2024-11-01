import React, { Fragment } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

export const StateCard = ({ state, style }) => {
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
