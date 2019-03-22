import React, { Component } from 'react';
import '../static/css/RandomMovie.css';
import { Segment, Grid, Image, Progress } from 'semantic-ui-react';

class RandomMovie extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            movie : {
                title : 'Movie',
                overview : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Ipsum nunc aliquet bibendum enim facilisis gravida. Sed pulvinar proin gravida hendrerit lectus a. Arcu non sodales neque sodales ut etiam. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Pulvinar pellentesque habitant morbi tristique senectus et netus et. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Et molestie ac feugiat sed lectus. Sed turpis tincidunt id aliquet risus feugiat in ante. Diam phasellus vestibulum lorem sed risus ultricies.',
                image : 'https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                release_date : new Date(),
                runtime : 0,
                genres : [],
                rating : 2.9,
                voters : 0
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
                <Grid centered>
                    <Grid.Column mobile={16} tablet={6} computer={9}>
                        {/* <Responsive maxWidth={768}> */}
                            <Image src={movie.image}/>
                        {/* </Responsive>
                        <Responsive minWidth={768} maxWidth={1023}>
                            <Image size='big' src={movie.image}/>
                        </Responsive> */}
                        {/* <Responsive></Responsive>
                        <Responsive minWidth={1024}> 
                            <Image style={{width : '300', height : '450'}} size='medium'  src={movie.image}/>
                        </Responsive> */}
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={7}>
                        <h1>{movie.title}</h1>
                        <p>User Rating : </p>
                        <Progress
                            indicating
                            size='small'
                            style={{width : '30%', backgroundColor : '#1f1e1e'}}
                            // success={this.getProgressColour(movie.rating * 10) === "success" ? true : false} 
                            // error={this.getProgressColour(movie.rating * 10) === "error" ? true : false}
                            // warning={this.getProgressColour(movie.rating * 10) === "warning" ? true : false}
                            percent={movie.rating * 10}
                            active
                            progress
                        />
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default RandomMovie;
