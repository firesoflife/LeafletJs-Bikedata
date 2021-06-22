import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const RaceMap = () => {
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
				<Marker position={[42.983, -81.249]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default RaceMap;
