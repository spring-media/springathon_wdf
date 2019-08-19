import React from 'react'
import { Button } from '@material-ui/core'
import ReactPlayer from 'react-player'

export function VotingPage() {
  return (
    <div>
      <h1>voting page</h1>
        <ReactPlayer url='sample-video.mp4' controls/>
      <Button variant="outlined" color="primary" onClick={null}>
        Like
      </Button>
    </div>
  )
}
