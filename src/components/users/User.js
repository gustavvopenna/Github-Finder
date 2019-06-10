import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import Repos from '../users/Repos'
import PropTypes from 'prop-types'

class User extends Component {
  componentDidMount() {
    const { oneUser, oneUserRepos } = this.props
    oneUser(this.props.match.params.login)
    oneUserRepos(this.props.match.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    oneUser: PropTypes.func.isRequired,
    oneUserRepos: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user

    const { loading, repos } = this.props

    if (loading) return <Spinner />

    return (
      <Fragment>
        <Link to="/">
          <button className="btn btn-light">Go back</button>
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className="fa fa-check text-success" />
        ) : (
          <i className="fa fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt={login}
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio && (
              <div>
                <h3>Biography</h3>
                <p>{bio}</p>
              </div>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>{login && <Fragment>Username: {login}</Fragment>}</li>
              <li>{company && <Fragment>Company: {company}</Fragment>}</li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Repos: {public_repos}</div>
          <div className="badge badge-dark">Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    )
  }
}

export default User
