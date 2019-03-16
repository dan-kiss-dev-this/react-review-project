import React from 'react';
import './index';

const SeriesListItem = ({ series_single }) => (
    <li>{series_single.show.name}</li>
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