var React = require('react')

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  console.log('ConfirmBattle Component')
  return (
    (props.isLoading === true) ? (
      <div>
        LOADING!
      </div>
    ) : (
      <div>
        CONFIRM BATTLE!: {puke(props)}
      </div>
    )
  )
}

module.exports = ConfirmBattle