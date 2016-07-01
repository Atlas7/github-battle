// this is a stateful component
var React = require('react')
var Prompt = require('../components/Prompt')

// Stateful component
var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(event) {
    this.setState({
      username: event.target.value
    })
  },
  handleSubmitUser: function(event) {
    event.preventDefault()
    var username = this.state.username
    this.setState({
      username: ''
    })
    if (this.props.routeParams.playerOne) {
      //  go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }

  },
  render: function(){
    console.log(this)
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}

      />
    )
  }
})

module.exports = PromptContainer