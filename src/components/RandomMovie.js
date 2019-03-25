import React, { Component } from 'react';
import '../static/css/RandomMovie.css';
import { Segment, Image, Progress, Container, Responsive, Icon } from 'semantic-ui-react';
import API from '../providers/API';

const getProgressColour = (percentage) => {
    if (percentage > 0 && percentage < 50)
        return ("error")        
    else if (percentage > 49 && percentage < 80)
        return ("warning")                
    else if (percentage > 79 && percentage <= 100)
        return ("success")        
}

const RenderMovie = (props) => {
    const {movie, imageWidth, contentWidth} = props
    return (
        <>
        <div style={{ width : imageWidth}} className="column" >
            <center>
                <Image style={{ width : '300px', height : '450px' }} src={API.images.movieImage(movie.poster_path)}/>
            </center>
        </div>
        <div style={{ width : contentWidth}} className="column" >
            <h1 className='movie-title'>{movie.title}</h1><span className='release-date'>({movie.release_date})</span>
            <div>
                <span>User Score   :  {movie.vote_count} voters</span>
                <Progress
                    indicating
                    size='small'
                    style={{width : '30%', backgroundColor : '#1f1e1e'}}
                    success={getProgressColour(movie.vote_average * 10) === "success" ? true : false} 
                    error={getProgressColour(movie.vote_average * 10) === "error" ? true : false}
                    warning={getProgressColour(movie.vote_average * 10) === "warning" ? true : false}
                    percent={movie.vote_average * 10}
                    // active
                    progress
                    />
            </div>
            <div>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
            </div>
            <div style={{paddingTop : '20px'}}>
                <h4>Runtime &#160; : &#160;{movie.runtime} minutes <Icon className='tmdb-color' name='stopwatch'/></h4>
                {/* <h4>Genre(s) &#160; : &#160; {movie.genres.map((genre, i) => {
                    if (movie.genres.length - 1 === i) {
                        return (<>&#160; {`${genre}`}</>)
                    }
                    else 
                        return (<>&#160; {`${genre},`}</>)
                })} </h4> */}
                <h4>Website &#160; : &#160;  <a href={`https://${movie.homepage}`}>{movie.homepage}</a> <Icon className='tmdb-color' name='globe'/></h4>
            </div>
        </div>
        </>
    )
}

class RandomMovie extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            timer: null,
            counter: 0        
        }
    }

    componentDidMount() {
        this.setState({movie : this.props.selectedMovie})
    }

    render() {
        const movie =  this.props.selectedMovie

        return (
            <Segment className='movie-segment'>
                <Container>
                    <div className="row">
                        <Responsive maxWidth={767}>
                            <RenderMovie movie={movie} imageWidth={'100%'} contentWidth={'100%'} />
                        </Responsive>
                        <Responsive minWidth={768}>
                            <RenderMovie movie={movie} imageWidth={'40%'} contentWidth={'60%'} />
                        </Responsive>
                    </div>
                </Container>
            </Segment>
        );
    }
}

export default RandomMovie;
