import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
// import UsersItem from './components/users/UsersItem'
import Users from './components/users/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <UsersItem /> */}
        <Users />
      </div>
    )
  }
}

export default App
