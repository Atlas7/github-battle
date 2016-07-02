var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  render: function() {
    return (
      <div>
        <div>*** ConfirmBattle Container ***</div>
        <ConfirmBattle />
      </div>
    )
  }
})

module.exports = ConfirmBattleContainer