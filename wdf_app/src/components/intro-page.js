import React from 'react'
import { makeStyles } from '@material-ui/styles'

export function IntroPage({ moveToPage }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <button onClick={moveToPage} className={classes.button} />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    width: '400px',
    height: '715px',
    background: 'url("wdf_images/full-landing-page.png")',
    backgroundSize: 'contain',
    position: 'relative',
  },
  button: {
    width: '200px',
    height: '100px',
    position: 'absolute',
    bottom: '120px',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0,
    cursor: 'pointer'
  }
})
