import React, { Component } from 'react';
import './static/css/App.css';
import API from './providers/API';
import { Container, Menu, Responsive, Loader, Input } from 'semantic-ui-react';
import RandomMovie from './components/RandomMovie';
import PopularMovies from './components/PopularMovies';
import validator from 'validator'

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
          searchResults : {},
          isSearching  : false
      }
    }

  getNowPlaying = async () => {
    const res = await API.generated.nowPlaying()
    this.setState({
      nowPlaying : res.data.results,
      selectedMovie : res.data.results[this.state.counter],
      isLoading : false
    })
    this.getMovieDetails(res.data.results[this.state.counter].id)
  }

  getMovieSearchQuerie = async (query) => {
    const res = await API.search.movie(query)
    this.setState({ searchResults : res.data.results })		
  }

  getMovieDetails = async (id) => {		
    const res = await API.generated.getMovieDetails(id)		
    this.setState({selectedMovie : res.data})		
  }		
		
  getPopularMovies = async () => {		
    const res = await API.generated.getPopularMovies()		
    this.setState({		
      popularMovies : res.data.results,		
    })  		
  }

  componentDidMount () {
    this.getNowPlaying()
    this.getPopularMovies()
    let timer = setInterval(this.tick, 15000);
    this.setState({timer});
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


  onChange = async (e) => {
    const query = e.target.value
    if (!validator.isEmpty(query, { ignore_whitespace: true } )) {
      await this.setState({ isSearching : true })
      this.getMovieSearchQuerie(query)
    }
    else {
      this.setState({ isSearching : false })
    }
  } 

  render() {
    const {selectedMovie, isLoading, popularMovies, searchResults} = this.state
    return (
      <div className="App">
        <nav className='AppNav'>
        {/* <pre>{JSON.stringify(searchResults, 2, " ")}</pre> */}

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
                  <Input onChange={this.onChange} className="search-input" placeholder='Seach Movies..'/>
                  {/* <Icon className='search-input-icon' size='large' inverted name='search'/> */}
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

// style={{backgroundColor: 'black',
//   color: 'white',
//   borderRadius: '500rem',
//   border: '1px solid #01d277',
//   textAlign: 'left',
//   lineHeight: '1.21428571em',
//   padding: '.67857143em 1em'
// }} 

export default App;
