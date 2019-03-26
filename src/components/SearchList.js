import React from 'react';
import { List, Image, Modal } from 'semantic-ui-react';
import API from '../providers/API';
import { MovieModal } from './MovieModal';

export class SearchList extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            modalOpen : false,
            selectedMovie : {}
        }
    }

    openModal = async (mvie) => {
        const res = await API.generated.getMovieDetails(mvie.id)
        this.setState({ modalOpen : true, selectedMovie : res.data })
    } 
    
    closeModal = () => this.setState({ modalOpen : false, selectedMovie : {} })

    render () {
        const { results } = this.props
        const { modalOpen, selectedMovie } = this.state

        return (
            <React.Fragment>
                <List selection verticalAlign='middle' inverted divided>
                    {
                        results.slice(0, 8).map(rslt => (
                            <List.Item onClick={() => this.openModal(rslt)} key={rslt.id}>
                                <Image style={{width : '35px', height : '50px'}} src={API.images.movieImage(rslt.poster_path)}/>
                                <List.Content>
                                    <List.Header><h3>{rslt.title}</h3></List.Header>
                                </List.Content>
                            </List.Item>
                        ))
                    }
                    <center>
                        <p style={{color : 'white'}}>Results limited to 8 movies only.</p>
                    </center>
                </List>

                <Modal open={modalOpen} className='movie-modal'>
                    <MovieModal closeModal={this.closeModal} selectedMovie={selectedMovie} />
                </Modal>
            </React.Fragment>
        )
    }
}

export default SearchList;