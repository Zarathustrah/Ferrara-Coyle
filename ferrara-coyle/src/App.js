import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, CssBaseline } from '@material-ui/core'
import Content from './components/Content'


const useStyles = makeStyles(theme => ({
  root: {
    background: '#000000'
    // [theme.breakpoints.down('xs')]: {
    //   background: '#000000',
    // }
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Content />      
    </Grid>
  )
}