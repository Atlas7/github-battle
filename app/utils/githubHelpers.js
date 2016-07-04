// fetch some data from GitHub
import axios from 'axios'
import { id, secret } from '../secrets/githubAPIConfig'

const param = "?client_id=" + id + "&client_secret=" + secret

// Promises here

// fetch Github user info
function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

// fetch Github usernames repos
function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos'+ param + '&per_page=100')
}

// calculate all the stars that the user has
function getTotalStars(repos) {
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

// getRepos
// getTotalStars
// return object with that data
function getPlayersData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

// return an array, after doing some fancy algorithms to determine a winner
function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

// core module here
export function getPlayersInfo (players) {
  return axios.all(players.map(function (username) {
    return getUserInfo(username)
  }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
}

export function battle (players) {
  const playerOneData = getPlayersData(players[0]);
  const playerTwoData = getPlayersData(players[1]);
  return axios.all([playerOneData, playerTwoData])
    .then(calculateScores)
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
}
