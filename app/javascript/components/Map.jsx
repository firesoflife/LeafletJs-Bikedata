import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
	// const location = position => racer.current_location;

	// console.log(racerPosition.current_location);

	return (
		<div className='container'>
			<h1 className='title'>Track Your Favourite Riders</h1>
			{/* <h2>{racerPosition.current_location}</h2> */}

			<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default Map;
