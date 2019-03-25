import React, { Component } from 'react';
import './static/css/App.css';
import API from './providers/API';
import { Container, Menu, Icon, Responsive, Loader } from 'semantic-ui-react';
import RandomMovie from './components/RandomMovie';
import PopularMovies from './components/PopularMovies';

class App extends Component {

  constructor(props)
  {
      super(props)
      this.state = {
          nowPlaying : [],
          popularMovies : [],
          timer: null,
          counter: 0,
          selectedMovie : {},
          selectedMovieId : 0,
          isLoading: true,
        res : {}
      }
    }

  getNowPlaying = async () => {
    const res = await API.generated.nowPlaying()
    this.setState({res : res})
      {/*nowPlaying : res.data.results,
      selectedMovie : res.data.results[this.state.counter],
      isLoading : false
    })
    this.getMovieDetails(res.data.results[this.state.counter].id)*/}
  }

  {/*getMovieDetails = async (id) => {
    const res = await API.generated.getMovieDetails(id)
    this.setState({selectedMovie : res.data})
  }

  getPopularMovies = async () => {
    const res = await API.generated.getPopularMovies()
    this.setState({
      popularMovies : res.data.results,
    })  
  }*/}

  componentDidMount () {
    this.getNowPlaying()
   // this.getPopularMovies()
   // let timer = setInterval(this.tick, 15000);
    //this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick = async () => {
    if (this.state.counter === 9)
    {
      await this.setState({counter : -1})
    }
    // i dont think setting the state 2 times in a row is good, but i couldnt find a solution to some small problem i had :(
    await this.setState({
      counter: this.state.counter + 1,
    });

    this.getMovieDetails(this.state.nowPlaying[this.state.counter].id)

    await this.setState({
      selectedMovieId : this.state.nowPlaying[this.state.counter].id
    });
  }

  render() {
    const {selectedMovie, isLoading, popularMovies} = this.state
    return (
      <div className="App">
                             <pre>{JSON.stringify(this.state.res, 2, " ")}</pre>


        <nav className='AppNav'>
          <Container style={{paddingTop : '10px', paddingBottom : '10px'}}>
            <Menu borderless inverted secondary>
              <Menu.Item>
                <Responsive maxWidth={767}>
                  <h2 className='tmdb-color'>AMS</h2>
                </Responsive>
                <Responsive minWidth={768}>
                  <h2><span className='tmdb-color'>A</span>nother <span className='tmdb-color'>M</span>ovie <span className='tmdb-color'>S</span>ite</h2>
                </Responsive>
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
          {
            isLoading ? 
                <Loader indeterminate inverted active size='big' content='Just a moment, fetching movie data.'/> 
              : 
                <>
                  <RandomMovie selectedMovie={selectedMovie}/>
                  <PopularMovies popularMovies={popularMovies}/>
                </>
          }
        </div>
      </div>
    );
  }
}

export default App;
