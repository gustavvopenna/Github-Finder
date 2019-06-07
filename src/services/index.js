import axios from 'axios'

const baseURL = 'https://api.github.com'

// this.service = axios.create({
//   baseURL,
//   withCredentials: true
// })
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
}

export default GithubService
