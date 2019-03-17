import React from 'react';
import loaderSrc from '../../assets/Spinner-1s-200px.gif';

const Loader = props => (
    <div>
        <p>Loading</p>
        <img src={loaderSrc} alt='loader icon'></img>
    </div>
);

export default Loader;