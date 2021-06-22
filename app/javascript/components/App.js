import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Map from './Map';
import { Route, Switch } from 'react-router-dom';
import RacerProfile from './RacerProfile/RacerProfile';
import RacerProfiles from './RacerProfiles/RacerProfiles';

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Map} />
			<Route exact path='/racers/:id' component={RacerProfiles} />
		</Switch>
	);
};

export default App;
