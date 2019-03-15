import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/intro';

class App extends Component {
  state = {
    series: [],
  }

  //in component did mount we are using a timer to update series of state after 2 seconds
  componentDidMount() {
    const series = ["Vikings", "Game of thrones"];

    setTimeout(() => {
      this.setState({ series, });
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV series list</h1>
        </header>
        <Intro message='Here are your fav series'/>
        <p>Length of series array is {this.state.series.length}</p>
      </div>
    );
  }
}

export default App;
