import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, CssBaseline } from '@material-ui/core'
import Content from './components/Content'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    width: '100%',
    backgroundImage: `url('https://i.ibb.co/k6VGJn7/Ferrara-Coyle.jpg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      background: '#000000',
    }
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