import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: undefined,
      loading: true,
    }
    this.fetchRandomUser = this.fetchRandomUser.bind(this);
    this.returnUser = this.returnUser.bind(this);
  }

  fetchRandomUser() {
    const url = 'https://api.randomuser.me/';
    this.setState({
      loading: true,
    }, () => fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState(() => ({
        user: json.results[0],
        loading: false,
      }))))
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  returnUser() {
    return (
      <div>
        <img src={this.state.user.picture.thumbnail} />
        <p>Nome: {this.state.user.name.first}</p>
        <p>Idade: {this.state.user.dob.age}</p>
        <p>Email: {this.state.user.email}</p>
      </div>
    )
  }

  render() {
    // const { user } = this.state;
    // const { gender, name, location, email } = user;
    return (
      <div className="App">
        <div>{this.state.loading ? "Loading..." : this.returnUser()}</div>
      </div>
    );
  }
}
