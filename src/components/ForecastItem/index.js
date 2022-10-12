import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div>
                <h2>{data.title}</h2>
            </div>

            <img href={data.images.original.url} src={data.images.original.url} alt={data.title} />
        </div>
    );
};

export default ForecastItem;
