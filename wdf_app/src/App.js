import React, { useState } from 'react'
import { IntroPage } from './components/intro-page'
import { VotingPage } from './components/voting-page'
import { makeStyles } from '@material-ui/styles'
import './App.css'

const pages = {
  introPage: 'intro_page',
  votingPage: 'voting_page',
  resultPage: 'result_page',
}

function App() {
  const [page, setPage] = useState(pages.introPage)
  const classes = useStyles()
  return (
    <div className="App">
      <div className={classes.container}>
        <div className={classes.videoContainer}>
          {page === pages.introPage && <IntroPage moveToPage={moveToVoting} />}
          {page === pages.votingPage && <VotingPage />}
        </div>
      </div>
    </div>
  )

  function moveToVoting() {
    setPage(pages.votingPage)
  }
}

const useStyles = makeStyles({
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
})

export default App
