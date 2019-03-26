import React from 'react';
import { RenderMovie } from './RenderMovie';
import { Image, Responsive, Icon, Modal, Button } from 'semantic-ui-react';
import API from '../providers/API';

export const MovieModal = (props) => {
    const { selectedMovie, closeModal } = props
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
                        <Button floated='right' className='movie-list-button' as='a' href={`https://www.themoviedb.org/movie/${selectedMovie.id}`} >View On TMDB</Button>
                    </div>
                </div>
            </Responsive>
        </React.Fragment>
    )
}