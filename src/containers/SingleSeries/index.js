import React, { Component } from 'react';
import Loader from '../../components/Loader/index';

class SingleSeries extends Component {
    state = {
        show: null,
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embedded-episodes`)
            .then(response => response.json() )
            .then(json => this.setState({ show: json }));
    }

    render() {
        const {show} = this.state;
        console.log(18,show);
        return (
            <div>
                <p>
                    Single Series - the show id is {this.props.match.params.id}
                </p>
                { show === null ? 
                    <Loader /> : 
                    <div>
                        <p>Show name is {show.name}</p>
                        <img src={show.image.medium} />
                    </div>
                }

            </div>
        );
    }
}

export default SingleSeries;