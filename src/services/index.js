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
      .get('/users')
      .then(users => users)
      .catch(err => err)
  }
}

export default GithubService
