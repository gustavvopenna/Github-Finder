import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'

import GithubService from '../../services/index'
const service = new GithubService()

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  //search users
  //Search Github users filtered by username
  const searchUsers = async text => {
    setLoading()
    const res = await service.getFilteredUsers(text)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }

  //get user

  //get repos

  //clear users

  //set loading

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
