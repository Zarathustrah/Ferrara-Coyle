import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({

title: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  color: '#ffffff',
  marginTop: '280px',
  marginBottom: '-5px',
  textAlign: 'center'
},
subtitle: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: '36px',
  color: '#ffffff',
  marginTop: '0',
  marginBottom: '15px',
  textAlign: 'center'
},
body: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: '20px',
  color: '#ffffff',
  textAlign: 'center',
  margin: '-5px',
  
},
contact: {
  fontFamily: 'BaskervilleDisplayPT-Regular',
  fontSize: '20px',
  color: '#ffffff',
  textAlign: 'center',
  margin: '20px'
},
anchor: {
  textDecoration: 'none',
  color: '#ffffff'
}
}))

export default function Content() {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='h1' className={classes.title}>Ferrara & Coyle</Typography>
      <Typography className={classes.subtitle}>Interior & Architectural Design</Typography>
      <Typography className={classes.body}>17 Berkeley Street,</Typography>
      <Typography className={classes.body}>London W1J 8EA</Typography>
      <Typography className={classes.contact}>
        <a href='mailto:info@ferrara-coyle.com' className={classes.anchor}>info@ferrara-coyle.com</a>
      </Typography>
    </div>
  )
}


