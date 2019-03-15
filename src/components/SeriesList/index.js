import React from 'react';

const SeriesList = props => {
    return (
        <div>
            <ul>
                {props.list.map(series_single =>
                    <li>{series_single.show.name}</li>
                )}
            </ul>
        </div>
    )
}

export default SeriesList;