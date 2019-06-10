import React, { Fragment } from 'react'
import ReposItem from './ReposItem'
import PropTypes from 'prop-types'

const Repos = ({ repos }) => {
  return (
    <Fragment>
      {repos.map(repo => (
        <ReposItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  )
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
}

export default Repos
