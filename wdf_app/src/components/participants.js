import React from 'react'
import { makeStyles } from '@material-ui/styles'

export function Participants({ data, currentIndex, onClick }) {
  const classes = useStyles()
  return (
    <div className={classes.participants}>
      {data.map((video, index) => {
        const border = currentIndex !== 'undefined' && currentIndex === index ? { border: `2px solid ${video.color}` } : {}
        return (
          <div
            key={index}
            onClick={() => onClick(index)}
            className={classes.portrait}
            style={{ backgroundImage: `url(${video.imageSrc})`, ...border }}
          />
        )
      })}
    </div>
  )
}

const useStyles = makeStyles({
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
})
