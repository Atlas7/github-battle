var React = require('react')
var PropTypes = React.PropTypes
var transparentBg = require('../styles').transparentBg

// functional stateless (presentational) component
function Prompt (props) {
  console.log('Prompt Component')
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
         <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text"/>
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              class="btn btn-block btn-success"
              type="submit">
              continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// document the props that get parsed into this stateless functional component
Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt