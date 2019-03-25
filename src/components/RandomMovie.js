import React, { Component } from 'react';
import '../static/css/RandomMovie.css';
// eslint-disable-next-line 
import { Segment, Grid, Image, Progress, Container, Responsive, Icon } from 'semantic-ui-react';

class RandomMovie extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            movie : {
                title : 'Movie',
                overview : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Ipsum nunc aliquet bibendum enim facilisis gravida. Sed pulvinar proin gravida hendrerit lectus a. Arcu non sodales neque sodales ut etiam. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Et molestie ac feugiat sed lectus. Sed turpis tincidunt id aliquet risus feugiat in ante. Diam phasellus vestibulum lorem sed risus ultricies.',
                image : 'https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                release_date : new Date().getFullYear(),
                runtime : 0,
                genres : ["comedy", "drama", "horror"],
                rating : 7.9,
                voters : 2340,
                homepage : 'www.google.com'
            },
            progress : 0
        }
    }

    getProgressColour = (percentage) => {
        if (percentage > 0 && percentage < 50)
            return ("error")        
        else if (percentage > 49 && percentage < 80)
            return ("warning")                
        else if (percentage > 79 && percentage <= 100)
            return ("success")        
    }

    

    render() {
        const { movie } = this.state

        return (
            <Segment className='movie-segment'>
                <Container>
                    <div className="row">
                        <Responsive maxWidth={767}>
                            <div style={{ width : '100%'}} className="column" >
                                <center>
                                    <Image style={{ width : '300px', height : '450px' }} src={movie.image}/>
                                </center>
                            </div>
                            <div style={{ width : '100%'}} className="column" >
                                {/* TODO : need to fix this coz its very stupid to have long repeating code, just postponing it for now.. DONT FORGET ANDILE!!!!!! */}
                                <h1 className='movie-title'>{movie.title}</h1><span className='release-date'>({movie.release_date})</span>
                                <div>
                                    <span>User Score   :  {movie.voters} voters</span>
                                    <Progress
                                        indicating
                                        size='small'
                                        style={{width : '30%', backgroundColor : '#1f1e1e'}}
                                        success={this.getProgressColour(movie.rating * 10) === "success" ? true : false} 
                                        error={this.getProgressColour(movie.rating * 10) === "error" ? true : false}
                                        warning={this.getProgressColour(movie.rating * 10) === "warning" ? true : false}
                                        percent={movie.rating * 10}
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
                                    <h4>Genre(s) &#160; : &#160; {movie.genres.map((genre, i) => {
                                        if (movie.genres.length - 1 === i) {
                                            return (<>&#160; {`${genre}`}</>)
                                        }
                                        else 
                                            return (<>&#160; {`${genre},`}</>)
                                    })} </h4>
                                    <h4>Website &#160; : &#160;  <a href={`https://${movie.homepage}`}>{movie.homepage}</a> <Icon className='tmdb-color' name='globe'/></h4>
                                </div>
                            </div>
                        </Responsive>
                        <Responsive minWidth={768}>
                            <div style={{ width : '40%'}} className="column" >
                                <center>
                                    <Image style={{ width : '300px', height : '450px' }} src={movie.image}/>
                                </center>
                            </div>
                            <div style={{ width : '60%'}} className="column" >
                                <h1 className='movie-title'>{movie.title}</h1><span className='release-date'>({movie.release_date})</span>
                                <div>
                                    <span>User Score   :  {movie.voters} voters</span>
                                    <Progress
                                        indicating
                                        size='small'
                                        style={{width : '30%', backgroundColor : '#1f1e1e'}}
                                        success={this.getProgressColour(movie.rating * 10) === "success" ? true : false} 
                                        error={this.getProgressColour(movie.rating * 10) === "error" ? true : false}
                                        warning={this.getProgressColour(movie.rating * 10) === "warning" ? true : false}
                                        percent={movie.rating * 10}
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
                                    <h4>Genre(s) &#160; : &#160; {movie.genres.map((genre, i) => {
                                        if (movie.genres.length - 1 === i) {
                                            return (<>&#160; {`${genre}`}</>)
                                        }
                                        else 
                                            return (<>&#160; {`${genre},`}</>)
                                    })} </h4>
                                    <h4>Website &#160; : &#160;  <a href={`https://${movie.homepage}`}>{movie.homepage}</a> <Icon className='tmdb-color' name='globe'/></h4>
                                </div>
                            </div>
                        </Responsive>
                    </div>
                </Container>
            </Segment>
        );
    }
}

export default RandomMovie;
