var React = require('react')

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <div>*** Main Component ***</div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main