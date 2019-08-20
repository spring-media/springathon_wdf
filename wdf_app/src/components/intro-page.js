import React from 'react'
import Button from '@material-ui/core/Button'

export const IntroPage = ({ moveToPage }) => (
  <div>
    <h1>Intro Page</h1>
    <Button onClick={moveToPage}>Start</Button>
  </div>
)
