import React from 'react'
import { makeStyles } from '@material-ui/styles'

export function OverviewPage() {
  const classes = useClasses()
  return <div className={classes.root}></div>
}

const useClasses = makeStyles({
  root: {
    width: '400px',
    height: '715px',
    background: 'url("wdf_images/full-final-page.png")',
    backgroundSize: 'contain',
    position: 'relative',
  },
})
