import React, { Component } from 'react';
import '../static/css/RandomMovie.css';
import { Segment, Container, Responsive, Button, Icon, Modal, Embed} from 'semantic-ui-react';
import { RenderMovie } from './RenderMovie';
import API from '../providers/API';

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

    //looking at the video array, some movies have more videos and the trailer wont be necesarily be at a specific index in the array..
    //and some videos are not from youtube, so this is my attempt in filtering and only taking what I need {key, type, site}
    //it doesnt really matter whether i get the first or 2nd trailer.. I just want a trailer :)
    getMovieTrailer = (videoArray) => {
        const site = "YouTube"
        const type_ = "Trailer"

        videoArray.forEach(vidObject => {
            //just return anything that matches the 2 condition
            let VID_YOUTUBE_KEY = vidObject.key
            
            if  (vidObject.site === site && vidObject.type === type_)
                return (VID_YOUTUBE_KEY)
        });
    }

    render() {
        const { pauseTimer, resumeTimer } =  this.props
        const movie = this.props.selectedMovie

        return (
            <Segment className='movie-segment'>
                <Container>
                    <div className="row">
                        <h1>In Cinemas</h1>
                        <Responsive maxWidth={767}>
                            <RenderMovie includeTitle={true} includeImage={true} movie={movie} imageWidth={'100%'} contentWidth={'100%'} />
                        </Responsive>
                        <Responsive minWidth={768}>
                            <RenderMovie includeTitle={true} includeImage={true} movie={movie} imageWidth={'40%'} contentWidth={'60%'} />
                        </Responsive>
                        {
                            movie.videos !== undefined ? 
                                <Modal
                                    closeOnEscape
                                    closeOnDimmerClick
                                    closeIcon
                                    trigger={
                                        <Button onClick={() => pauseTimer()} className='movie-list-button' floated='right'>Watch Trailer &#160; <Icon  name='video play'/></Button>
                                    }
                                >
                                    <Embed onClose={() => resumeTimer()} source='youtube' id={this.getMovieTrailer(movie.videos.results)} placeholder={API.images.movieImage(movie.backdrop_path)}/>
                                </Modal> 
                            : 
                                null
                        }
                    </div>
                </Container>
            </Segment>
        );
    }
}

export default RandomMovie;
