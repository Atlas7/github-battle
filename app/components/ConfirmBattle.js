var React = require('react')
var Router = require('react-router')
var PropTypes = React.PropTypes
var Link = Router.Link
var UserDetails = require('./UserDetails')
var UserDetailsWrapper = require('./UserDetailsWrapper')

var styles = require('../styles')


function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  console.log('ConfirmBattle Component')
  return (
    (props.isLoading === true) ? (
      <p>LOADING!</p>
    ) : (
      <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        {/* CONFIRM BATTLE!: {puke(props)} */}
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player 1">
            {/* puke(props.playersInfo[0]) */}
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            {/* puke(props.playersInfo[0]) */}
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
              Initiate Battle!
            </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
              <button className="btn btn-lg btn-danger">
                Reselect Player
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle