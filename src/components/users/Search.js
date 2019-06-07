import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    )
  }
}

export default Search
