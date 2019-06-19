import React, { Fragment } from 'react'
import ReposItem from './ReposItem'

const Repos = ({ repos }) => {
  return (
    <Fragment>
      {repos.map(repo => (
        <ReposItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  )
}

export default Repos
