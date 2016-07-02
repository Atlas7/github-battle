// fetch some data from GitHub
var axios = require('axios')
var gitHubAPIConfig = require('../../secrets/githubAPIConfig')
var id = gitHubAPIConfig.id
var sec = gitHubAPIConfig.secret
var param = "?client_id=" + id + "&client_secret=" + sec

// returns a promise (i.e. GitHub info for a username)
function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(
      players.map(function(username){
        return getUserInfo(username)
      })
    ).then(function(info){
      console.log(info)
      return info.map(function(user){
        return user.data
      })
    })
  }
}

module.exports = helpers