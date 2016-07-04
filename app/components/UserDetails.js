import React, { PropTypes } from 'react'

function UserDetails ({ score, info }) {
  // const { score, info } = user
  return (
    <div>
      {!!score && <li className="list-group-item"><h3>Score: {score}</h3></li>}
      <li className="list-group-item"><img src={info.avatar_url} className="img-rounded img-responsive"/></li>
      {!!info.name && <li className="list-group-item">Name: {info.name}</li>}
      <li className="list-group-item">Username: {info.login}</li>
      {!!info.location && <li className="list-group-item">Location: {info.location}</li>}
      {!!info.company && <li className="list-group-item">Company: {info.company}</li>}
      <li className="list-group-item">Followers: {info.followers}</li>
      <li className="list-group-item">Following: {info.following}</li>
      <li className="list-group-item">Public Repos: {info.public_repos}</li>
      {!!info.blog && <li className="list-group-item">Blog: <a href={info.blog}> {info.blog}</a></li>}
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  })
}

export default UserDetails