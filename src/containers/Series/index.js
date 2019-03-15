import React, { Component } from 'react';
import 'whatwg-fetch';

class Series extends Component {
    state = {
        series: [],
      }
    
      componentDidMount() {
        //fetch will return a promise as a response object is returned
        //now we will need to parse results of response object, .json() takes a response stream and reads to completion, it returns a promise that resolves with the result of parsing the body text as json, note with .then we keep passing the resulting value to the next .then
        fetch('http://api.tvmaze.com/search/shows?q=friends')
          .then(response => response.json() )
          .then(json => this.setState({ series: json}))
      }

    render() {
        return (
            <div>
                <div>Length of series array is {this.state.series.length}</div>
            </div>
        );
    }
}

export default Series;