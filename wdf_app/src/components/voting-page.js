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
    color: '#FF3B00',
  },
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/Video+zu+Eroller+von+Heuzeroth.mp4',
    imageSrc: 'wdf_images/fighter-thomas.png',
    name: 'Thomas Heuzeroth',
    color: '#FF3B00',
  },
  {
    videoUrl: 'https://springerthon-wdf.s3.eu-central-1.amazonaws.com/videos/sonja.mov',
    imageSrc: 'wdf_images/fighter-sonja.png',
    name: 'Sonja Gillert',
    color: '#FF3B00',
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
    <>
      <header>
        <div className={classes.logo}>
          <svg alt="Die Welt logo" width="76" height="20" viewBox="0 0 76 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M65.332 4.679h-5.519V.562h15.655v4.117h-5.505v14.728h-4.631V4.68zM49.719.562h4.631V15.29h8.055v4.117H49.719V.562zM46.416 17.03l-.06.055c-2.026 1.864-4.486 2.732-7.74 2.732-5.732 0-9.583-3.928-9.583-9.774 0-5.914 3.752-9.889 9.336-9.889 5.348 0 8.954 3.943 8.973 9.812 0 .578-.039 1.269-.096 1.692H34.03l.045.219c.568 2.509 2.237 3.835 4.828 3.835 1.682 0 3.28-.598 4.62-1.73l.06-.05 2.833 3.098zm-3.933-8.794l-.047-.215c-.526-2.424-1.946-3.705-4.106-3.705-2.253 0-3.719 1.281-4.24 3.705l-.045.215h8.438zM20.768 14.12L17.071.562H12.08L8.382 14.093 4.862.563H.048L5.37 19.406h5.588l3.584-12.19 3.584 12.19h5.587L29.034.562h-4.745l-3.521 13.559z" fill-rule="nonzero"/>
          </svg>
        </div>
        <div className={classes.score}>
          <Chip className={classes.chip} label={scores[currentIndex]} icon={<ThumbUp color="secondary" />} />
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
    </>
  ) : (
    <div className={classes.resultPage}>
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
  logo: { position: 'absolute', left: '20px', top: '20px', width: 'auto', height: '40px', fill: 'white' },
  score: {
    position: 'absolute',
    right: '20px',
    top: '20px',
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
  chip: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: 'white',

    '& > svg': {
      padding: '5px',
      fill: 'white'
    }
  },
  fab: {
    width: 80,
    height: 80,
    marginBottom: 20,
    backgroundColor: 'red'
  },
  resultPage: {
    width: '400px',
    height: '715px',
    background: 'url("wdf_images/full-results-page.png")',
    backgroundSize: 'contain',
  },
})
