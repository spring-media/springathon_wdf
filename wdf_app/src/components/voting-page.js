import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/styles'
import ThumbUp from '@material-ui/icons/ThumbUp'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import IconButton from '@material-ui/core/IconButton'
import Chip from '@material-ui/core/Chip'
import classNames from 'classnames'
import { Participants } from './participants'
import { FloatingButton } from './floating-button'

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

const startingScores = [500, 400, 200]

export function VotingPage() {
  const classes = useStyles()
  const [isGameOn, setIsGameOn] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scores, setScores] = useState(startingScores)
  const [hasLiked, setHasLiked] = useState([false, false, false])

  return isGameOn ? (
    <div className={classes.container}>
      <div className={classes.videoContainer}>
        <header>
          <div className={classes.logo}>
            <img alt="Die Welt logo" src={'wdf_images/logo-welt.svg'} />
          </div>
          <div className={classes.score}>
            <Chip label={scores[currentIndex]} icon={<ThumbUp color="secondary" />} />
          </div>
        </header>
        <ReactPlayer url={videos[currentIndex].videoUrl} controls width="100%" height="100%" onEnded={handleVideoEnd} />
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
          <FloatingButton onClick={() => toggleHasLiked(currentIndex)} isLiked={hasLiked[currentIndex]} />
          <Participants data={videos} onClick={goToIndex} currentIndex={currentIndex} hasLiked={hasLiked} />
        </div>
      </div>
    </div>
  ) : (
    <div className={classes.container}>
      <div className={classes.videoContainer}>
        <Participants data={videos} showThumbs={true} onClick={toggleHasLiked} hasLiked={hasLiked} />
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

  function toggleHasLiked(index) {
    const SCORE_TO_ADD = 100
    const newScores = [...scores]
    const newLikes = [...hasLiked]
    if (!hasLiked[index]) {
      newScores[currentIndex] += SCORE_TO_ADD
      setScores(newScores)
      newLikes[index] = true
      setHasLiked(newLikes)
    } else {
      newScores[index] -= SCORE_TO_ADD
      setScores(newScores)
      newLikes[index] = false
      setHasLiked(newLikes)
    }
  }

  function handleVideoEnd() {
    if (currentIndex === videos.length - 1) {
      setIsGameOn(false)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
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
