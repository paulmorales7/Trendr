import React, { Component } from 'react';
import axios from 'axios';
import API from "../utils/API";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search: ''
    }
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      search: this.state.search
    }

    console.log(search);

    axios.post('http://localhost:3001/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}