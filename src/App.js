import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro/intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV series list</h1>
        </header>
        <Intro message='Here are your fav series'/>
      </div>
    );
  }
}

export default App;
