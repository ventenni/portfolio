import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

import "./../../assets/styles/components/profile-cover-card.scss";

const ProfileCoverCard = (props) => {
	return (
		<Card className="profile-cover-card">
			<CardImg src="http://via.placeholder.com/2000x600" alt="cover" />

			<CardBody>
				<div className="profile-cover-card__profile-image">
					<img src={props.profileImage} alt="cover" />
				</div>

				<h2 className="profile-cover-card__details">Nick Vaiente</h2>
			</CardBody>
		</Card>
	);
};

export default ProfileCoverCard;
