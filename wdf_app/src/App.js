import React, { useState } from 'react'
import { IntroPage } from './components/intro-page'
import { VotingPage } from './components/voting-page'
import { ResultsPage } from './components/results-page'
import './App.css'

const pages = {
  introPage: 'intro_page',
  votingPage: 'voting_page',
  resultPage: 'result_page',
}

function App() {
  const [page, setPage] = useState(pages.introPage)

  return (
    <div className="App">
      {page === pages.introPage && <IntroPage moveToPage={moveToVoting} />}
      {page === pages.votingPage && <VotingPage moveToPage={moveToEnd} />}
      {page === pages.resultPage && <ResultsPage />}
    </div>
  )

  function moveToVoting() {
    setPage(pages.votingPage)
  }

  function moveToEnd() {
    setPage(pages.resultPage)
  }
}

export default App
