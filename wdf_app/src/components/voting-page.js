import React from 'react'
import { Button } from '@material-ui/core'
import ReactPlayer from 'react-player'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import ThumbUp from '@material-ui/icons/ThumbUp'

export function VotingPage() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <AwesomeSlider className={classes.container} bullets={false}>
        <div>
          <ReactPlayer url="sample-video.mp4" controls width="100%" height="100%" />
        </div>
        <div>
          <ReactPlayer url="sample-video.mp4" controls width="100%" height="100%" />
        </div>
      </AwesomeSlider>
      <div className={classes.menu}>
        <div className={classes.portrait}></div>
        <Fab color="secondary">
          <ThumbUp />
        </Fab>
        <div className={classes.portrait}></div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    width: '300px',
    position: 'relative',
  },
  menu: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    zIndex: 1000,
    transform: 'translateX(-50%)',
    display: 'flex',
    '& > :not(:last-child)': {
      marginRight: '10px'
    }
  },
  portrait: {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    borderRadius: '50%',
  }
});
