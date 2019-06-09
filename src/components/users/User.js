import React, { Component } from 'react'

class User extends Component {
  async componentDidMount() {
    const { oneUser } = this.props
    await oneUser(this.props.match.params.login)
  }
  render() {
    return <div>{this.props.user.name}</div>
  }
}

export default User
