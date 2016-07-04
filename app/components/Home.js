import React from 'react'
import { Link } from 'react-router'
import MainContainer from './MainContainer'

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

export default Home