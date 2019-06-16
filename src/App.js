import React, { Fragment, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import GithubService from './services/index'

import GithubState from './context/github/GithubState'

const service = new GithubService()

const App = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  //Get a single Github user
  const oneUser = async username => {
    setLoading(true)
    try {
      const res = await service.getUser(username)
      const { data } = res
      setUser(data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  const oneUserRepos = async username => {
    setLoading(true)
    try {
      const res = await service.getUserRepos(username)
      const { data } = res
      setRepos(data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  //Set Alert when user does not enter somethig in the search input
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <GithubState>
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
                    <Search setAlert={showAlert} />
                    <Users />
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
                    oneUser={oneUser}
                    user={user}
                    loading={loading}
                    oneUserRepos={oneUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  )
}

export default App
