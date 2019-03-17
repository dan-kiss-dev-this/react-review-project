import React, { Component } from 'react';
import './App.css';
import Main from '../Main/index'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV series list</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;



  //in component did mount we are using a timer to update series of state after 2 seconds
  // componentDidMount() {
  //   const series = ["Vikings", "Game of thrones"];

  //   setTimeout(() => {
  //     this.setState({ series, });
  //   }, 2000);
  // }