import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

wrapper: {
  minHeight: '100vh',
  width: '100%',
  backgroundImage: `url('https://i.ibb.co/k6VGJn7/Ferrara-Coyle.jpg')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  alignItems: 'center',
  justifyContent: 'center',
},
content: {
  alignItems: 'center',
  justifyContent: 'center'
},

title: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: 80,
  color: '#ffffff',
  letterSpacing: 3,
  marginTop: '320px',
  marginBottom: '-25px',
  textAlign: 'center',
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: 70,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: 50,
    marginTop: '180px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 36,
    marginTop: '180px'
  },
},
subtitle: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: 36,
  color: '#ffffff',
  marginBottom: '30px',
  textAlign: 'center',
  [theme.breakpoints.between('md', 'lg')]: {
    fontSize: 30,
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: 26,
    marginTop: '8px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 20,
    marginTop: '15px'
  },
},
body: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: 20,
  color: '#ffffff',
  textAlign: 'center',
  margin: '-5px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: 18,
    marginTop: '5px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 18,
  },
  
},
contact: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: 20,
  color: '#ffffff',
  textAlign: 'center',
  margin: '30px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: 18,
    // marginTop: '5px'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 18,
    // marginTop: '10px'
  },
},
anchor: {
  textDecoration: 'none',
  color: '#ffffff'
},
}))

export default function Content() {
  const classes = useStyles()

  return (
  <Grid container className={classes.wrapper}>  
  <div className={classes.content}>
    <Typography className={classes.title}>Ferrara & Coyle</Typography>
    <Typography className={classes.subtitle}>Interior & Architectural Design</Typography>
    <Typography className={classes.body}>17 Berkeley Street,</Typography>
    <Typography className={classes.body}>London W1J 8EA</Typography>
    <Typography className={classes.contact}>
      <a href='mailto:info@ferrara-coyle.com' className={classes.anchor}>info@ferrara-coyle.com</a>
    </Typography>
  </div>    
  </Grid>
  )
}


