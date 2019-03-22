import React, { Component } from 'react';
import './App.css';
import API from './providers/API';
import { Container, Menu, Icon } from 'semantic-ui-react';

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
        <nav className='AppNav'>
          <Container style={{paddingTop : '10px', paddingBottom : '10px'}}>
            <Menu borderless inverted secondary>
              <Menu.Item>
                <h2>Another Movie Site</h2>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item style={{position : 'relative'}}>
                  <input className='search-input' placeholder='Seach Movies..'/>
                  <Icon className='search-input-icon' size='large' inverted name='search'/>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Container>
        </nav>
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
