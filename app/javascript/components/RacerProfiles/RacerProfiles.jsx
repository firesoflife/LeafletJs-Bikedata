import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const RacerProfiles = () => {
	const [racers, setRacers] = useState([]);

	useEffect(() => {
		// Get all racers from Rails Api
		//Update Airlines in State

		axios
			.get('/api/v1/racers.json')
			.then(resp => {
				console.log(resp);
				setRacers(resp.data.data);
			})
			.catch(resp => console.log(resp));
	}, [racers.length]);

	// const list = racers.map(item => {
	// 	return (
	// 		<li key='item.attributes.f_name.l_name'>
	// 			{item.attributes.f_name} {item.attributes.l_name}{' '}
	// 			{/* {item.attributes.current_location.lat} */}
	// 		</li>
	// 	);
	// });

	return (
		<Fragment>
			<div>
				<h1>Choose your favourite Racer!</h1>
				{/* <ul>{list}</ul> */}
			</div>
		</Fragment>
	);
};

export default RacerProfiles;
