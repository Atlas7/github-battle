import React, { PropTypes }  from 'react'
import { Link } from 'react-router'
import { space } from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import MainContainer from './MainContainer'
import Loading from './Loading'

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle({isLoading, playersInfo, onInitiateBattle}) {
  // console.log('ConfirmBattle Component')
  return (
    (isLoading === true) ? (
      <Loading speed={100} text="Confirming Battle"/>
    ) : (
      <MainContainer>
        {/* CONFIRM BATTLE!: {puke({isLoading, playersInfo, onInitiateBattle})} */}
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player 1">
            {/* puke(playersInfo[0]) */}
            <UserDetails info={playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            {/* puke(playersInfo[0]) */}
            <UserDetails info={playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={space}>
            <button className="btn btn-lg btn-success" onClick={onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className="col-sm-12" style={space}>
            <Link to="/playerOne">
              <button className="btn btn-lg btn-danger">
                Reselect Player
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
    )
  )
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle