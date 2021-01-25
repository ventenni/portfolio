import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';


import './../../assets/styles/components/profile-cover-card.scss';

const ProfileCoverCard = (props) => {
	return (
		<Card className="profile-cover-card">
			
			<CardImg src="http://via.placeholder.com/300x200" alt="cover" />
			
			<CardBody>
				
				<div className="profile-cover-card__profile-image">
					<img src={props.profileImage} alt="cover" />
				</div>

				<CardText className="profile-cover-card__details">
					Esse magna nostrud voluptate excepteur excepteur non proident esse. 
				</CardText>
			
			</CardBody>

		</Card>
	);
}
 
export default ProfileCoverCard;