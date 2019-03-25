import axios from 'axios'

const base_uri = 'http://api.themoviedb.org/3/'
// eslint-disable-next-line
const image_uri = 'http://image.tmdb.org/t/p/original/'
const API_KEY = '795a3e21e8c1bf69b4fca3164dfe2afb'
const query_options = {
    lang : '&language=en-US',
    page : '&page=1' 
}

const API = {
    search : {
        movie : (query) => {
            return (
                axios.get(`${base_uri}search/movie?api_key=${API_KEY}&query=${query}${query_options.lang}${query_options.page}`)
                .then(res => res)
                .catch(err => err.response)
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
                axios.get(`${base_uri}movie/${movieID}?api_key=${API_KEY}${query_options.lang}`)
                .then(res => res)
                .catch(err => err.response)
            )
        },
        //THIS FUNCTION WILL ONLY RETURN 10 OF THE MOST POPULAR MOVIES FROM TMDB
        getPopularMovies : () =>  {
            axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

            return (
                axios.get(`${base_uri}movie/popular?api_key=${API_KEY}${query_options.lang}${query_options.page}`)
                .then(res => res)
                .catch(err => err.response)
            )
        },
        nowPlaying : () => {
            return (
                axios.get(`${base_uri}movie/now_playing?api_key=${API_KEY}${query_options.lang}${query_options.page}`)
                .then(res => res)
                .catch(err => err.response)
            )
        }
    },
    genre : {
        getAllGenres : () => {
            return (
                axios.get(`${base_uri}genre/movie/list?api_key=${API_KEY}${query_options.lang}`)
            )
            .then(res => res)
            .catch(err => err.response)
        }
    }
}

export default API
