import React, { Component } from 'react';
import '../static/css/RandomMovie.css';
import { Segment, Container, Responsive } from 'semantic-ui-react';
import { RenderMovie } from './RenderMovie';

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
                        <h2>In Cinemas</h2>
                        <Responsive maxWidth={767}>
                            <RenderMovie includeTitle={true} includeImage={true} movie={movie} imageWidth={'100%'} contentWidth={'100%'} />
                        </Responsive>
                        <Responsive minWidth={768}>
                            <RenderMovie includeTitle={true} includeImage={true} movie={movie} imageWidth={'40%'} contentWidth={'60%'} />
                        </Responsive>
                    </div>
                </Container>
            </Segment>
        );
    }
}

export default RandomMovie;
