import React from 'react'
import Routes from '../Routes'
import { withStyles } from '@material-ui/core/styles';
import { MainStyles } from '@styles'

const Board = withStyles(MainStyles)(({classes, children})=>
  <div className={classes.root}>{children}</div>
)

export const Main = (props) => {
    return (
      <Board>
        <Routes />
      </Board>
    )
}
