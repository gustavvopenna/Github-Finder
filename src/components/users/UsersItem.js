import React, { Component } from 'react'

class UsersItem extends Component {
  render() {
    const { id, login, avatar_url, html_url } = this.props.user
    return (
      <div key={id} className="card text-center">
        <img
          src={avatar_url}
          alt={login}
          className="round-img"
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )
  }
}

export default UsersItem
