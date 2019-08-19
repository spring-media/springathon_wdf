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
          <ReactPlayer url="sample-video.mp4" controls width={400} height={250} />
        </div>
        <div>
          video2
          <ReactPlayer url="sample-video.mp4" controls />
        </div>
      </AwesomeSlider>
      <Fab>
        <ThumbUp />
      </Fab>
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    width: '400px',
  },
})
