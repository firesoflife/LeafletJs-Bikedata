import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Menu from './Menu/Menu';
import RaceMap from './RaceMap';
import { Route, Switch } from 'react-router-dom';
import RacerProfile from './RacerProfile/RacerProfile';
import RacerProfiles from './RacerProfiles/RacerProfiles';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Menu} />
			<Route exact path='/map' component={RaceMap} />
			<Route exact path='/racers' component={RacerProfiles} />
			<Route exact path='/racer/:id' component={RacerProfile} />
		</Switch>
	);
};

export default App;
