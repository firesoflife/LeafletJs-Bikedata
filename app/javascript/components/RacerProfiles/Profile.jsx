import React from 'react';
import RacerProfiles from './RacerProfiles';

const Profile = props => {
	return (
		<div className='profile-wrapper'>
			<div className='racer-bio'>
				{props.attributes.f_name} {props.attributes.l_name}{' '}
			</div>
			<div className='card'>
				<div className='name-logo-box'>
					<div className='profile-img'>
						<ion-icon name='bicycle'></ion-icon>
					</div>
				</div>
				<div className='racer-city'>{props.attributes.city} </div>
				<div className='racer-state'>{props.attributes.state} </div>
				<div className='racer-location'>Check Map!</div>
			</div>
		</div>
	);
};

export default Profile;
