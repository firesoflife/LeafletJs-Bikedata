import React, { useState, useEffect, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const RaceMap = props => {
	const [position, setPosition] = useState([]);

	useEffect(() => {
		axios
			.get('/api/v1/racers.json')
			.then(resp => {
				setPosition(resp.data.data);
				// console.log(resp.data.data);
			})
			.catch(resp => console.log(resp));
	}, [position.length]);

	const marker = position.map(racerPosition => {
		return (
			<Fragment>
				<Marker
					key={racerPosition.id}
					position={[
						racerPosition.attributes.lat,
						racerPosition.attributes.lng,
					]}
				>
					<Popup>{racerPosition.attributes.f_name}</Popup>
				</Marker>
			</Fragment>
		);
	});

	return (
		<div>
			<h1 className='title'>Track Your Favourite Riders</h1>
			<MapContainer
				center={[40.0149856, -105.2705456]}
				zoom={13}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				{/* <Marker position={[42.983, -81.249]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
				{marker}
			</MapContainer>
		</div>
	);
};

export default RaceMap;
