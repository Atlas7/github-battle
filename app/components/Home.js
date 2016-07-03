var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var MainContainer = require('./MainContainer')

var Home = React.createClass({
  render: function() {
    // console.log('Home Component')
    return (
      <div>
        <MainContainer>
          <h1>Github battle</h1>
          <p className="lead">Some fancy motto</p>
          <Link to="/playerOne">
            <button
              type='button'
              className='btn btn-lg btn-success'>
              Get Started
            </button>
          </Link>
        </MainContainer>
      </div>
    )
  }
})

module.exports = Home