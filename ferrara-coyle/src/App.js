import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, CssBaseline } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    width: '100vw',
    background: `url('https://i.ibb.co/Kbm85dy/Ferrara-Coyle-holding-page.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
  }
})

export default function App() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
    </Grid>
  )
}