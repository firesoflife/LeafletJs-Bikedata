import React from 'react';
import RacerProfiles from './RacerProfiles';

const Profile = props => {
	return (
		<div className='profile-wrapper'>
			<div className='racer-bio'>
				{props.attributes.f_name} {props.attributes.l_name}{' '}
			</div>
			<div className='card'>
				<div className='profile'>
					<ion-icon name='bicycle'></ion-icon>
					<div className='info-box'>
						<h3 className='info-title'>Racer Info</h3>
						<div className='line-break'></div>
						<div className='racer-city'>
							<span className='lead'>Home Town: </span>
							<br></br>
							{props.attributes.city}{' '}
						</div>
						<div className='racer-state'>
							<span className='lead'>Home State: </span>
							{props.attributes.state}{' '}
						</div>
					</div>
				</div>
				<div className='racer-location'>
					Find {props.attributes.f_name} on the Map!
				</div>
			</div>
		</div>
	);
};

export default Profile;
