import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { RICK, ROBERT, CLOUD, SUN } from './constants/finds';
import './App.css';

const cities = [RICK, ROBERT, CLOUD, SUN];

class App extends Component {
    constructor() {
        super();
        this.state = { city: null };
    }
    handleSelectedLocation = (city) => {
        this.setState({ city });
        console.log(`handleSelectedLocation ${city}`);
    };
    render() {
        const { city } = this.state;
        return (
            <Grid>
                <Row>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="subtitle1" color="inherit">
                                Giphy App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList
                            cities={cities}
                            onSelectedLocation={this.handleSelectedLocation}
                        ></LocationList>
                    </Col>
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="detail">
                                {city && <ForecastExtended city={city}></ForecastExtended>}
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
