import React from 'react'
import { Button } from '@material-ui/core'
import ReactPlayer from 'react-player'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles';

export function VotingPage() {
  return (
    <div>
      voting page
      <AwesomeSlider cssModule={AwsSliderStyles}>
        <div>
          video1
          <ReactPlayer url="sample-video.mp4" controls />
        </div>
        <div>
          video2
          <ReactPlayer url="sample-video.mp4" controls />
        </div>
      </AwesomeSlider>
      <Button variant="outlined" color="primary" onClick={null}>
        Like
      </Button>
    </div>
  )
}
