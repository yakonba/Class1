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
import Title from './components/Title';

const cities = [RICK, ROBERT, CLOUD, SUN];
const titulo = 'Giphy App';

class App extends Component {
    constructor() {
        super();
        this.state = { city: null };
    }
    handleSelectedLocation = (city) => {
        this.setState({ city });
        console.log(`handleSelectedLocation ${city}`);
    };
    handleText = () => {
        return (
            <>
                <h1>Hola</h1>
            </>
        );
    };
    render() {
        const { city } = this.state;
        return (
            <Grid>
                <Row>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="subtitle1" color="inherit">
                                <Title texto={titulo} style={{ color: 'gray' }} />
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
