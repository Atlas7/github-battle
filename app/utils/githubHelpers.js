var axios = require('axios')

var gitHubAPIConfig = require('../../secrets/githubAPIConfig')
var id = gitHubAPIConfig.id
var sec = gitHubAPIConfig.secret

var param = "?client_id=" + id + "&client_secret=" + sec

// returns a promise (i.e. GitHub info for a username)
function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}


// Evaluate promises
var helpers = {
  getPlayersInfo: function(players) {
    // fetch some data from GitHub

    return axios.all(
      // for each player in the players array (playerOne, playerTwo)...
      players.map(
        function(username){
          // return the individual getUserInfo promises
          return getUserInfo(username)
        }
      )
      // axios.all waits for these promises to resolve (perform get request, and obtain playerOne and playerTwo info from GitHub)
    ).then(
      // now we have an info array (containing GitHub info for playerOne and playerTwo), lets run a function!
      function(info){
        console.log(info)
    })
  }
}

module.exports = helpers