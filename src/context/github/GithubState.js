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
  //Get a single Github user
  const oneUser = async username => {
    setLoading()

    const res = await service.getUser(username)
    const { data } = res

    dispatch({
      type: GET_USER,
      payload: data
    })
  }

  //get repos
  const oneUserRepos = async username => {
    setLoading()
    const res = await service.getUserRepos(username)

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
  }

  //clear users
  //Clear users from State
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  //set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        oneUser,
        oneUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
