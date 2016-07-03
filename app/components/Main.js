var React = require('react')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group')
require('../main.css')

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

module.exports = Main