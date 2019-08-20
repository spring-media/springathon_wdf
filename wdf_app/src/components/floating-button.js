import React from 'react'
import Fab from '@material-ui/core/Fab'
import ThumbUp from '@material-ui/icons/ThumbUp'

export function FloatingButton({ isLiked, size, onClick, className }) {
  return (
    <Fab color={isLiked ? 'secondary' : 'primary'} onClick={onClick} size={size} className={className}>
      <ThumbUp />
    </Fab>
  )
}
