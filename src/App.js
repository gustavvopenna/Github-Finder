import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import GithubService from './services/index'

const service = new GithubService()

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await service.getUsers()

    this.setState({ users: res.data, loading: false })
  }

  //Search Github users
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

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App
