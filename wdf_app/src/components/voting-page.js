import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab'
import ThumbUp from '@material-ui/icons/ThumbUp'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import classNames from 'classnames'

const videos = [
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/M_Heller_vertical+scooter.MP4',
    imageSrc: 'wdf_images/fighter-martin.png',
    name: 'Martin Heller',
    color: 'yellow',
  },
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/Video+zu+Eroller+von+Heuzeroth.mp4',
    imageSrc: 'wdf_images/fighter-thomas.png',
    name: 'Thomas Heuzeroth',
    color: 'pink',
  },
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/sonja.mov',
    imageSrc: 'wdf_images/fighter-sonja.png',
    name: 'Sonja Gillert',
    color: 'blue',
  },
  // { videoUrl: '', imageSrc: '', name: 'Karl Lauterbach', color: 'blue' },
]

export function VotingPage() {
  const classes = useStyles()
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className={classes.container}>
      <div className={classes.videoContainer}>
        <header>
          <div className={classes.logo}>
            <img src={'wdf_images/logo-welt.svg'} />
          </div>
          <div className={classes.score}>
            <Chip label={'100'} icon={<ThumbUp color='secondary'/>} />
          </div>
        </header>
        <ReactPlayer url={videos[currentIndex].videoUrl} controls width="100%" height="100%" />
        {currentIndex !== 0 && (
          <div className={classNames(classes.iconButton, classes.buttonLeft)}>
            <IconButton color="secondary" onClick={handleOnClickLeft}>
              <KeyboardArrowLeft />
            </IconButton>
          </div>
        )}
        {currentIndex !== videos.length - 1 && (
          <div className={classNames(classes.iconButton, classes.buttonRight)}>
            <IconButton color="secondary" onClick={handleOnClickRight}>
              <KeyboardArrowRight />
            </IconButton>
          </div>
        )}
        <div className={classes.menu}>
          <Fab color="secondary">
            <ThumbUp />
          </Fab>
          <div className={classes.participants}>
            {videos.map((video, index) => {
              const border = currentIndex === index ? { border: `2px solid ${video.color}` } : {}
              return (
                <div
                  onClick={() => goToIndex(index)}
                  className={classes.portrait}
                  style={{ backgroundImage: `url(${video.imageSrc})`, ...border }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )

  function handleOnClickLeft() {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleOnClickRight() {
    if (currentIndex !== videos.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  function goToIndex(index) {
    setCurrentIndex(index)
  }
}

const useStyles = makeStyles({
  logo: { position: 'absolute', left: '10px', top: '10px', width: '10px', height: '50px' },
  score: {
    position: 'absolute',
    width: '50px',
    height: '50px',
    right: '30px',
    top: '10px',
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
    height: '715px',
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
    backgroundSize: 'contain',
  },
  participants: {
    marginTop: '10px',
    display: 'flex',
    '& > :not(:last-child)': {
      marginRight: '20px',
    },
  },
  iconButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
  },
  buttonLeft: {
    left: '10px',
  },
  buttonRight: {
    right: '10px',
  },
})
