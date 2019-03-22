import React, { Component } from 'react';
import './static/css/App.css';
import API from './providers/API';
import { Container, Menu, Icon } from 'semantic-ui-react';
import RandomMovie from './components/RandomMovie';

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
                <h2><span className='tmdb-color'>A</span>nother <span className='tmdb-color'>M</span>ovie <span className='tmdb-color'>S</span>ite</h2>
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
        <div className="AppBody">
        <RandomMovie/>
        <RandomMovie/>
        <RandomMovie/>
        <RandomMovie/>
        </div>
      </div>
    );
  }
}

export default App;
