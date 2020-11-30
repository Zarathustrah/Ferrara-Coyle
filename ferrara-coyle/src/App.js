import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, CssBaseline } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    width: '100%',
    background: `url('https://i.ibb.co/k6VGJn7/Ferrara-Coyle.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '85%',
    [theme.breakpoints.between('xs', 'sm')]: {
      backgroundSize: 'contain',
    }
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
    </Grid>
  )
}