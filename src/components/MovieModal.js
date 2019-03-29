import React from 'react';
import { RenderMovie } from './RenderMovie';
import { Image, Responsive, Icon, Modal, Button, Embed } from 'semantic-ui-react';
import API from '../providers/API';

export class MovieModal extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            vidTrailerID : ''       
        }
    }

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
        this.setState({ vidTrailerID : this.getMovieTrailer(movie.videos.results) })
    }

    render () {
        const { selectedMovie, closeModal } = this.props
        const { vidTrailerID } = this.state

        return (
            <React.Fragment>
                <Responsive maxWidth={767}>
                    <Modal.Header style={{padding : '10px', borderBottom : '1px solid white', marginBottom : '15px'}}>
                            <h4>
                                {selectedMovie.title}
                                <Icon onClick={() => closeModal()} className='movie-modal-icon' name='close'/>
                            </h4>
                    </Modal.Header>
                    <div className="modal-column column-padding">
                        <RenderMovie includeTitle={false} includeImage={true} movie={selectedMovie} imageWidth={'100%'} contentWidth={'100%'}/>
                        <center>
                            <Button className='movie-list-button' as='a' href={`https://www.themoviedb.org/movie/${selectedMovie.id}`} >View On TMDB</Button>
                        </center>
                    </div>
                </Responsive>
                <Responsive minWidth={768}>
                    <div className="modal-row">
                        <div style={{ width : '40%'}} className="modal-column">
                            <Image style={{ width : '300px', height : '450px' }} src={API.images.movieImage(selectedMovie.poster_path)}/>
                        </div>
                        <div style={{ width : '60%'}} className="modal-column column-padding">
                            <h3>
                                {selectedMovie.title}
                                <Icon onClick={() => closeModal()} className='movie-modal-icon' name='close'/>
                            </h3>
                             <RenderMovie includeTitle={false} includeImage={false} movie={selectedMovie} imageWidth={'100%'} contentWidth={'100%'}/>
                            {
                                selectedMovie.videos !== undefined ? 
                                    <Modal
                                        closeOnEscape
                                        closeOnDimmerClick
                                        closeIcon
                                        trigger={
                                            <Button onClick={() => this.setVideoLink(selectedMovie)} className='movie-list-button' floated='right'>Watch Trailer &#160; <Icon  name='video play'/></Button>
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
                                            placeholder={API.images.movieImage(selectedMovie.backdrop_path)}
                                        />
                                    </Modal> 
                                : 
                                    null
                            }
                            <Button floated='right' className='movie-list-button' as='a' href={`https://www.themoviedb.org/movie/${selectedMovie.id}`} >View On TMDB</Button>
                        </div>
                    </div>
                </Responsive>
            </React.Fragment>
        )
    }
}