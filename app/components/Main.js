var React = require('react')

var Main = React.createClass({
  render: function(){
    // console.log('Main Component')
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main