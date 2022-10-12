import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import getUrlGiphy from "../../services/getUrlGiphy";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {
    const api_weather = getUrlGiphy(this.state.city);
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {

      });
  };

  render() {
    const { onWeatherLocationClick } = this.props;
    const { city } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>

      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func
};
export default WeatherLocation;
