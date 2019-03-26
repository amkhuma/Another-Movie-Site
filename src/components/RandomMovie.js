import React, { Component } from 'react';
import '../static/css/RandomMovie.css';
import { Segment, Container, Responsive} from 'semantic-ui-react';
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
                        <h1>In Cinemas</h1>
                        <Responsive maxWidth={767}>
                            <RenderMovie includeTitle={true} includeImage={true} movie={movie} imageWidth={'100%'} contentWidth={'100%'} />
                        </Responsive>
                        <Responsive minWidth={768}>
                            <RenderMovie includeTitle={true} includeImage={true} movie={movie} imageWidth={'40%'} contentWidth={'60%'} />
                        </Responsive>
                        {/* <Button className='movie-list-button' floated='left'><Icon name='angle left'/>Previous</Button>
                        <Button className='movie-list-button' floated='right'>Next <Icon name='angle right'/></Button> */}
                    </div>
                </Container>
            </Segment>
        );
    }
}

export default RandomMovie;
