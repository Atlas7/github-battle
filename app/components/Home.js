var React = require('react')
var transparentBg = require('../styles').transparentBg
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

var Home = React.createClass({
  render: function() {
    console.log('Home Component')
    return (
      <div>
        <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
          <h1>Github battle</h1>
          <p className="lead">Some fancy motto</p>
          <Link to="/playerOne">
            <button
              type='button'
              className='btn btn-lg btn-success'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    )
  }
})

module.exports = Home