var React = require('react')

function ConfirmBattle(props) {
  console.log('ConfirmBattle Component')
  return (
    (props.isLoading === true) ? (
      <div>
        <p> LOADING! </p>
      </div>
    ) : (
      <div>
        <p> CONFIRM BATTLE! </p>
      </div>
    )
  )
}

module.exports = ConfirmBattle