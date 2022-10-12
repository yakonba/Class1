import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
import getUrlGiphy from '../services/getUrlGiphy' 
// const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// };



class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = (city) => {

        const url_forecast = getUrlGiphy(city);
        fetch(url_forecast)
            .then((data) => data.json())
            .then((weather_data) => {
                console.log(weather_data);
                const forecastData = weather_data.data;
                this.setState({ forecastData });
            });
    };

    renderForecastItemDays(forecastData) {
        console.log(forecastData);
        return forecastData.map((forecast) => (
            <ForecastItem
                data={forecast}
            ></ForecastItem>
        ));
    }
    renderProgress() {
        return <h3>Cargando Pronostico extendido...</h3>;
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title"> Pronostico Extendido para {city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;
