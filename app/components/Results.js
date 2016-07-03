var React = require('react')
var PropTypes = React.PropTypes

function puke(object) {
  return <pre>{JSON.stringify(object, 2, ' ')}</pre>
}

function Results (props) {
  return (
    <div>
      <div> Results </div>
      {puke(props)}
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results