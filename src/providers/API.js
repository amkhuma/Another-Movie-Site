// import axios from 'axios'

const base_uri = process.env.REACT_APP_TMDB_BASE_URI
// eslint-disable-next-line
const image_uri = process.env.REACT_APP_TMDB_IMAGE_URI
const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const youtube_video_uri = "https://www.youtube.com/watch?v="

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
    trailer : {
        getYoutubeVid : (id) => {
            return (`${youtube_video_uri}${id}`)
        }
    },
    generated : {
        // THIS WILL BE USED TO GET ONE RANDOM MOVIE/TOP RATED MOVIE FROM THE MOST POPULAR MOVIES OR NOW PLAYING
        getMovieDetails : (movieID) => {
            return (
                fetch(`${base_uri}movie/${movieID}?api_key=${API_KEY}${query_options.lang}&append_to_response=videos`)
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
