import React from 'react';

import '../../assets/styles/components/profile-image.scss';

const ProfileImage = (props) => {
	return (
		<div className="profile-image">
			<div className="profile-image__image">
				<img src={props.image} alt="user profile image" />
			</div>
			
			<div className="profile-image__title">
				<h4>{props.name}</h4>
			</div>
		</div>
	);
}
 
export default ProfileImage;