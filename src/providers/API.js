// import axios from 'axios'

const base_uri = 'https://api.themoviedb.org/3/'
// eslint-disable-next-line
const image_uri = 'https://image.tmdb.org/t/p/original/'
const API_KEY = '795a3e21e8c1bf69b4fca3164dfe2afb'
const query_options = {
    lang : '&language=en-US',
    page : '&page=1' 
}

// eslint-disable-next-line
const axios_options = {
    headers: {'X-Requested-With': 'XMLHttpRequest'}
}

const API = {
    search : {
        movie : (query) => {
            return (
                fetch(`${base_uri}search/movie?api_key=${API_KEY}&query=${query}${query_options.lang}${query_options.page}`)
                .then(res => res.json())
                .then(
                    (result) => {
                      return(result)
                    },
                    (error) => {
                      return(error)
                    }
                )
            )
        }
    },
    images : {
        movieImage : (image) => {
            return (`${image_uri}${image}`)
        }
    },
    generated : {
        // THIS WILL BE USED TO GET ONE RANDOM MOVIE/TOP RATED MOVIE FROM THE MOST POPULAR MOVIES OR NOW PLAYING
        getMovieDetails : (movieID) => {
            return (
                fetch(`${base_uri}movie/${movieID}?api_key=${API_KEY}${query_options.lang}`)
                .then(res => res.json())
                .then(
                    (result) => {
                      return(result)
                    },
                    (error) => {
                      return(error)
                    }
                )
            )
        },
        //THIS FUNCTION WILL ONLY RETURN 10 OF THE MOST POPULAR MOVIES FROM TMDB
        getPopularMovies : () =>  {
            return (
                fetch(`${base_uri}movie/popular?api_key=${API_KEY}${query_options.lang}${query_options.page}`)
                .then(res => res.json())
                .then(
                    (result) => {
                      return(result)
                    },
                    (error) => {
                      return(error)
                    }
                )
            )
        },
        nowPlaying : () => {
            return (
                fetch(`${base_uri}movie/now_playing?api_key=${API_KEY}${query_options.lang}${query_options.page}`)
                .then(res => res.json())
                .then(
                    (result) => {
                      return(result)
                    },
                    (error) => {
                      return(error)
                    }
                )
            )
        }
    },
    genre : {
        getAllGenres : () => {
            return (
                fetch(`${base_uri}genre/movie/list?api_key=${API_KEY}${query_options.lang}`)
            )
            .then(res => res.json())
            .then(
                (result) => {
                    return(result)
                },
                (error) => {
                    return(error)
                }
            )
        }
    }
}

export default API
