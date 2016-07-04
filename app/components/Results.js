import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { space } from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

// function puke(object) {
//   return <pre>{JSON.stringify(object, 2, ' ')}</pre>
// }

function StartOver () {
  return (
    <div className="col-sm-12" style={space}>
      <Link to="/playerOne" >
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}


function Results (props) {

  if (props.isLoading === true) {
    return (
      <Loading speed={100} text="Computing Scores" />
    )
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = winningIndex === 0 ? 1 : 0
  return (
    <MainContainer>
      {/* puke(props) */}
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results