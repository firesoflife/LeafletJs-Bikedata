import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RacerProfiles = () => {
	const [racer, setRacer] = useState([]);

	useEffect(() => {
		// Get all racers from Rails Api
		//Update Airlines in State

		axios
			.get('/api/v1/racers.json')
			.then(resp => console.log(resp))
			.catch(resp => console.log(resp));
	}, [racers.length]);

	return (
		<div>
			<h1>Choose your favourite Racer!</h1>
		</div>
	);
};

export default RacerProfiles;
