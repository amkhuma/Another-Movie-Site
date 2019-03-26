import React from 'react';
import {Image, Progress,Icon } from 'semantic-ui-react';
import API from '../providers/API';
import { getProgressColour } from '../utils/getMovieColor';

export const RenderMovie = (props) => {
    const {movie, imageWidth, contentWidth, includeImage, includeTitle} = props
    //reason for this was that i was getting genres as undefined 3 times and then  defined after that \o/
    let genreArr = []

    if (movie.genres !== undefined)
        genreArr = movie.genres

    return (
        <>
            {includeImage ? 
                <div style={{ width : imageWidth}} className="column" >
                    <center>
                        <Image style={{ width : '300px', height : '450px' }} src={API.images.movieImage(movie.poster_path)}/>
                    </center>
                </div> : null
            }
            <div style={{ width : contentWidth}} className="column" >
                {
                    includeTitle ?
                        <>
                            <h1 className='movie-title'>{movie.title}</h1>
                            <span className='release-date'>({movie.release_date})</span>
                        </>
                    : null
                }
                <div>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </div>
                <div style={{paddingTop : '20px'}}>
                    <span>User Score &#160;:&#160; {movie.vote_count} voters</span>
                    <Progress
                        indicating
                        size='small'
                        style={{width : '30%', backgroundColor : '#1f1e1e'}}
                        success={getProgressColour(movie.vote_average * 10) === "success" ? true : false} 
                        error={getProgressColour(movie.vote_average * 10) === "error" ? true : false}
                        warning={getProgressColour(movie.vote_average * 10) === "warning" ? true : false}
                        percent={movie.vote_average * 10}
                        progress
                        />
                </div>
                <div style={{paddingTop : '20px'}}>
                    <h4>Runtime &#160; : &#160;{movie.runtime} minutes <Icon className='tmdb-color' name='stopwatch'/></h4>
                    <h4>Genre(s) &#160; : &#160; {genreArr.length  < 1 ? null : movie.genres.map((genre, i) => {
                        if (movie.genres.length - 1 === i)
                            return (<React.Fragment key={genre.id}>&#160; {`${genre.name}`}</React.Fragment>)
                        else 
                            return (<React.Fragment key={genre.id}>&#160; {`${genre.name},`}</React.Fragment>)
                    })} </h4>
                    <h4>Website &#160; : &#160; <a href={`${movie.homepage}`}>{movie.title} <Icon className='tmdb-color' name='globe'/></a></h4>
                </div>
            </div>
        </>
    )
}