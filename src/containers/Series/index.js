import React, { Component } from 'react';
import 'whatwg-fetch';
import SeriesList from '../../components/SeriesList/index';
import Loader from '../../components/Loader/';
import Intro from '../../components/Intro/intro';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false,
      }

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });
        //fetch will return a promise as a response object is returned
        //now we will need to parse results of response object, .json() takes a response stream and reads to completion, it returns a promise that resolves with the result of parsing the body text as json, note with .then we keep passing the resulting value to the next .then
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json() )
            .then(json => this.setState({ series: json, isFetching: false }))
    }

    render() {
        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <Intro message='Here are your fav series'/>
                <div>
                    <input 
                    value={seriesName}
                    type='text' 
                    onChange={this.onSeriesInputChange} />
                </div>
                { !isFetching && series.length === 0 && seriesName.trim() === '' && <p>Enter series name</p>}
                { !isFetching && series.length === 0 && seriesName.trim() !== ''  && <p>No TV series found</p>}
                { isFetching && <Loader /> }
                { !isFetching && <SeriesList list={this.state.series}/> }
                
            </div>
        );
    }
}

export default Series;