import React from 'react';
import './index';
import { Link } from 'react-router-dom';

const SeriesListItem = ({ series_single }) => (
    <li>
    {console.log(6,series_single)}
        <Link to={`/series/${series_single.show.id}`}>{series_single.show.name}</Link>
        
    </li>
);

const SeriesList = props => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map((series_single, index) => (
                    <SeriesListItem series_single={series_single} key={series_single.show.id}/>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;