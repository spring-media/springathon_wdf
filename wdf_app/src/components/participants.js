import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FloatingButton } from './floating-button'

export function Participants({ data, currentIndex, onClick, showThumbs, hasLiked }) {
  const classes = useStyles()
  return (
    <div className={classes.participants}>
      {data.map((video, index) => {
        const border =
          !showThumbs && currentIndex !== 'undefined' && currentIndex === index
            ? { border: `2px solid ${video.color}` }
            : {}
        return (
          <div key={index}>
            <div
              onClick={!showThumbs ? () => onClick(index) : null}
              className={classes.portrait}
              style={{ backgroundImage: `url(${video.imageSrc})`, ...border }}
            />
            {showThumbs && (
              <FloatingButton
                size="small"
                className={classes.fab}
                onClick={() => onClick(index)}
                isLiked={hasLiked[index]}
              />
            )}
          </div>
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
  fab: {
    marginTop: '5px',
  },
})
