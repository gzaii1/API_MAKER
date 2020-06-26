import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {MiddleStyles} from '@styles'

const Board = withStyles(MiddleStyles)(({classes, children})=>
  <div className={classes.root}>{children}</div>
)

export const Middle = ({children}) => {
    return (
      <Board>
          {children}
      </Board>
    )
}
