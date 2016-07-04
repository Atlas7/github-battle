import React from 'react'
import { transparentBg } from '../styles'

const MainContainer = function(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      {props.children}
    </div>
  )
}

export default MainContainer