import React from 'react';

import '../../assets/styles/components/profile-image.scss';

const ProfileImage = (props) => {
	return (
		<div className="profile-image">
			<div className="profile-image__image">
				<img src={props.image} alt="user profile" />
			</div>
			
			<div className="profile-image__title">
				<h4>{props.name}</h4>

				<div className="profile-image__title__contacts">
					<p className="profile-image__title__contacts__followers">89 Followers</p>
					<p className="profile-image__title__following">44 Following</p>
				</div>
			
			</div>
		</div>
	);
}
 
export default ProfileImage;