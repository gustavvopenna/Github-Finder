import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import GithubService from './services/index'

const service = new GithubService()

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  //Search Github users
  // async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await service.getUsers()

  //   this.setState({ users: res.data, loading: false })
  // }

  //Search Github users filtered by username
  searchUsers = async text => {
    this.setState({ loading: true })
    try {
      const res = await service.getFilteredUsers(text)
      const {
        data: { items }
      } = res
      this.setState({ users: items, loading: false })
    } catch (err) {
      this.setState({ loading: false })
      console.log(err)
      //Add toaster to give feedback to user
    }
  }

  //Get a single Github user
  oneUser = async username => {
    this.setState({ loading: true })
    try {
      const res = await service.getUser(username)
      const { data } = res
      this.setState({ user: data, loading: false })
    } catch (err) {
      this.setState({ loading: false })
      console.log(err)
      //Add toaster to give feedback to user
    }
  }

  oneUserRepos = async username => {
    this.setState({ loading: true })
    try {
      const res = await service.getUserRepos(username)
      const { data } = res
      this.setState({ repos: data, loading: false })
    } catch (err) {
      this.setState({ loading: false })
      console.log(err)
      //Add toaster to give feedback to user
    }
  }

  //Clear users from State
  clearUsers = () => this.setState({ users: [], loading: false })

  //Set Alert when user does not enter somethig in the search input
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })

    setTimeout(() => this.setState({ alert: null }), 3000)
  }

  render() {
    const { users, user, alert, loading, repos } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/:login"
                render={props => (
                  <User
                    {...props}
                    oneUser={this.oneUser}
                    user={user}
                    loading={loading}
                    oneUserRepos={this.oneUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
