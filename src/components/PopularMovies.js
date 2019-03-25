import React, { Component } from 'react';
import '../static/css/PopularMovies.css';
import { List, Container, Image, Responsive, Icon, Button } from 'semantic-ui-react';
import API from '../providers/API';
// import API from '../providers/API';

const RenderListContent = (props) => {
    const {movie} = props
    return (
        <List.Content>
            <List.Header><h1>{movie.title}</h1></List.Header>
            <List.Description style={{marginTop : '20px'}}>
                <h4 style={{marginBottom : '5px', marginTop : '5px'}}>Released : {movie.release_date}</h4>
                <h4 style={{marginBottom : '5px', marginTop : '5px'}}>Popularity : {movie.popularity} <Icon className='tmdb-color' name='star outline'/> </h4>
                <h4 style={{marginBottom : '5px', marginTop : '5px'}}>Language : {movie.original_language}</h4>
                <h4 style={{marginBottom : '5px', marginTop : '5px'}}>Released : {movie.title}</h4>
            </List.Description>

        </List.Content>
    )
}

class PopularMovies extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            movieList : []      
        }
    }

    // componentDidMount() {
    //     this.setState({movieList : this.props.popularMovies})
    // }

    render() {
        // const {movieList} = this.state
        return (
            this.props.popularMovies.length > 0 ? 
                <Container style={{color : 'white'}}>
                    <h1>Most Popular Movies</h1>
                    {/* <pre>{JSON.stringify(this.props.popularMovies, 2, " ")}</pre> */}
                    <List inverted divided>
                        {
                            this.props.popularMovies.map((movie, i) => (
                                <List.Item style={{paddingTop : '10px', paddingBottom : '10px', position : 'relative'}} key={movie.id}>
                                    <Responsive maxWidth={767}>
                                        <center>
                                            <Image size='tiny' src={API.images.movieImage(movie.poster_path)} />
                                            <RenderListContent movie={movie}/>
                                            <Button className='movie-list-button'>More Details</Button>
                                        </center>
                                    </Responsive>
                                    <Responsive minWidth={768}>
                                        <Image floated={i % 2 === 0 ? 'left' : 'right' } size='small' src={API.images.movieImage(movie.poster_path)} />
                                        <RenderListContent movie={movie}/>
                                        <Button className='movie-list-button' floated={i % 2 === 0 ? 'right' : 'left' }>More Details</Button>
                                    </Responsive>
                                </List.Item>
                            ))
                        }
                    </List>
                </Container>
                :
                    <>
                        {/* <pre>{JSON.stringify(this.props.popularMovies, 2, " ")}</pre>  */}
                        No Movies Found...
                    </>
        );
    }
}

export default PopularMovies;
