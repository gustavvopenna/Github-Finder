import React from 'react'
import PropTypes from 'prop-types'

const UsersItem = ({ user: { id, login, avatar_url, html_url } }) => {
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

UsersItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UsersItem
