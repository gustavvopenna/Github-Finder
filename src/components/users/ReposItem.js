import React from 'react'
import PropTypes from 'prop-types'

const ReposItem = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url}>
        <h3>{repo.name}</h3>
      </a>
    </div>
  )
}

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default ReposItem
