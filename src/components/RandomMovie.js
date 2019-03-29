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
            counter: 0,
            vidTrailerID : ''       
        }
    }
    //looking at the video array, some movies have more videos and the trailer wont be necesarily be at a specific index in the array..
    //and some videos are not from youtube, so this is my attempt in filtering and only taking what I need {key, type, site}
    //it doesnt really matter whether i get the first or 2nd trailer.. I just want a trailer :)
    getMovieTrailer = (videoArray) => {
        const site = "YouTube"
        const type_ = "Trailer"

        
        let url =  ''
        
        videoArray.forEach(vidObject => {
            //just return anything that matches the 2 condition
            let VID_YOUTUBE_KEY = vidObject.key
            
            if  (vidObject.site === site && vidObject.type === type_)
            {
                url = VID_YOUTUBE_KEY

                return 
            }
        });
        return (url)
    }

    setVideoLink = (movie) => {
        this.props.pauseTimer()
        this.setState({ vidTrailerID : this.getMovieTrailer(movie.videos.results) })
    }

    render() {
        const { vidTrailerID } = this.state
        const { resumeTimer } =  this.props
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
                                    onClose={() => resumeTimer()}
                                    closeOnEscape
                                    closeOnDimmerClick
                                    closeIcon
                                    trigger={
                                        <Button onClick={() => this.setVideoLink(movie)} className='movie-list-button' floated='right'>Watch Trailer &#160; <Icon  name='video play'/></Button>
                                    }
                                >
                                    <Embed 
                                        iframe={{
                                            allowFullScreen: true,
                                            style: {
                                                padding: 0,
                                            },
                                            src :  `//www.youtube.com/embed/${vidTrailerID}?autohide=true&amp;amp;autoplay=true&amp;amp;color=%23444444&amp;amp;hq=true&amp;amp;jsapi=false&amp;amp;modestbranding=false&amp;amp;rel=1`,
                                        }} 
                                        source={"youtube"}
                                        placeholder={API.images.movieImage(movie.backdrop_path)}
                                    />
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
