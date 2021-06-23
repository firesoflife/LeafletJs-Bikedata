import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Profile from './Profile';

const RacerProfiles = () => {
	const [racers, setRacers] = useState([]);

	useEffect(() => {
		axios
			.get('/api/v1/racers.json')
			.then(resp => {
				setRacers(resp.data.data);
			})
			.catch(resp => console.log(resp));
	}, [racers.length]);

	const grid = racers.map(item => {
		return <Profile key={item.id} attributes={item.attributes} />;
	});

	return (
		<Fragment>
			<div className='header'>
				<h1>Choose your Racer!</h1>
				<div className='subheader'>
					Track the location of your favourite racer and get their bios!
				</div>
				<div className='grid'>{grid}</div>
			</div>
		</Fragment>
	);
};

export default RacerProfiles;
