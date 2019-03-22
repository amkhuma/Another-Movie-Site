import React, { Component } from 'react';
import './App.css';
import API from './providers/API';

class App extends Component {

  getPopularMovies = async () => {
    const res = await API.generated.getPopularMovies()
    console.log(res)
  }
  componentDidMount () {
    this.getPopularMovies()
  }
  render() {
    return (
      <div className="App">
        <nav>Hello</nav>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
