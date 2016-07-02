var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState')
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount')
  },
  componentDidMount: function() {
    console.log('componentDidMount')
    var query = this.props.location.query
    // Fetch info from GitHub then update state
    githubHelpers.getPlayersInfo([
      query.playerOne,
      query.playerTwo
    ]).then(function(players){
      console.log('PLAYERS', players)
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))

  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps')
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },
  handleInitiatebattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  },
  render: function() {
    console.log('ConfirmBattle Container')
    console.log(this)
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiatebattle}
      />
    )
  }
})

module.exports = ConfirmBattleContainer