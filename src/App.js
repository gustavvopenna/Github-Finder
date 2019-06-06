import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import GithubService from './services/index'

const service = new GithubService()

class App extends Component {
  componentDidMount() {
    service
      .getUsers()
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    )
  }
}

export default App
