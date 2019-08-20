import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import AwesomeSlider from 'react-awesome-slider'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import ThumbUp from '@material-ui/icons/ThumbUp'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames'

const videos = [
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/M_Heller_vertical+scooter.MP4',
    imageSrc: '',
    name: 'Martin Heller',
    color: 'yellow',
  },
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/Video+zu+Eroller+von+Heuzeroth.mp4',
    imageSrc: '',
    name: 'Thomas Heuzeroth',
    color: 'pink',
  },
  { videoUrl: '', imageSrc: '', name: 'Sonja Gillert', color: 'blue' },
  { videoUrl: '', imageSrc: '', name: 'Karl Lauterbach', color: 'blue' },
];

export function VotingPage() {
  const classes = useStyles()
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className={classes.container}>
      <div className={classes.videoContainer}>
        <header>
          <div className={classes.logo}>Score</div>
          <div className={classes.score}>Score</div>
        </header>
        <ReactPlayer
          url="https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/Video+zu+Eroller+von+Heuzeroth.mp4"
          controls
          width="100%"
          height="100%"
        />
        <div className={classNames(classes.iconButton, classes.buttonLeft)}>
          <IconButton color='secondary'>
            <KeyboardArrowLeft />
          </IconButton>
        </div>
        <div className={classNames(classes.iconButton, classes.buttonRight)}>
          <IconButton color='secondary'>
            <KeyboardArrowRight />
          </IconButton>
        </div>
        <div className={classes.menu}>
          <Fab color="secondary">
            <ThumbUp />
          </Fab>
          <div className={classes.participants}>
            <div className={classes.portrait} />
            <div className={classes.portrait} />
            <div className={classes.portrait} />
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  logo: { position: 'absolute', left: 0, top: 0, width: '100px', height: '50px', backgroundColor: 'red' },
  score: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    right: 0,
    top: 0,
  },
  slider: {
    width: '400px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  videoContainer: {
    width: '400px',
    position: 'relative',
  },
  menu: {
    position: 'absolute',
    bottom: 90,
    left: '50%',
    zIndex: 1000,
    transform: 'translateX(-50%)',
  },
  portrait: {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    borderRadius: '50%',
  },
  participants: {
    marginTop: '10px',
    display: 'flex',
    '& > :not(:last-child)': {
      marginRight: '10px',
    },
  },
  iconButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
  },
  buttonLeft: {
    left: '10px'
  },
  buttonRight: {
    right: '10px'
  }
});
