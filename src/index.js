import React from 'react';
//react dom gets your app to be rendered
import ReactDOM from 'react-dom';
import './index.css';
//app is what is being rendered
import App from './components/App/App';
//service worker gets app to load faster 
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


// const getCurrentDate = () => {
//     const date = new Date();
//     console.log(date.toDateString());
//     return date.toDateString();
// }

// const greeting = React.createElement('h1', {}, 'Hello World');
//text below is transpiled using babel
//see you can invoke the function and get it's value returned for viewing
// const greeting = <h1>Hello World current date {getCurrentDate()}</h1>
// ReactDOM.render(greeting, document.getElementById('root'));


ReactDOM.render(<BrowserRouter> 
    <App /> 
</BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
