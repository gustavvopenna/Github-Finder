import axios from 'axios'

const baseURL = 'https://api.github.com'

class GithubService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: false //Check this out
    })
  }

  getUsers = () => {
    return this.service
      .get(
        `/users?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(users => users)
      .catch(err => err)
  }

  getFilteredUsers = text => {
    return this.service
      .get(
        `/search/users?q=${text}&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(users => users)
      .catch(err => err)
  }

  //Get a single user
  getUser = username => {
    return this.service
      .get(
        `/users/${username}?client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(users => users)
      .catch(err => err)
  }

  //Get repos from one user
  getUserRepos = username => {
    return this.service
      .get(
        `/users/${username}/repos?per_page=5&sort=created:asc&client_id=${
          process.env.REACT_APP_GITHUB_CLIENT_ID
        }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then(repos => repos)
      .catch(err => err)
  }
}

export default GithubService
