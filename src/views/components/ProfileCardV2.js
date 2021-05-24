import React, { useState } from "react";

// Styles
import "../../assets/styles/components/profile-card.scss";

import image from "../../assets/images/Cygnet 2.jpg";
import Envelope from "./../../assets/icons/envelope.svg";
import Eye from "./../../assets/icons/eye-solid.svg";
import Bell from "./../../assets/icons/bell.svg";
import EnvelopePink from "./../../assets/icons/envelope--pink.svg";
import EyeGreen from "./../../assets/icons/eye-solid--green.svg";
import BellRed from "./../../assets/icons/bell--red.svg";

const ProfileCardV2 = () => {
	const [notificationsDrawerIsActive, setNotificationsDrawerIsActive] =
		useState(false);
	const [messagesDrawerIsActive, setMessagesDrawerIsActive] = useState(false);
	const [viewsDrawerIsActive, setViewsDrawerIsActive] = useState(false);

	// Function to handle notification button click
	function handleNotifications(clicked) {
		setNotificationsDrawerIsActive(!notificationsDrawerIsActive);
	}

	// Function to handle message button click
	function handleMessages(clicked) {
		setMessagesDrawerIsActive(!messagesDrawerIsActive);
	}

	return (
		<div className="vnt-profile-card-v2">
			<div className="vnt-profile-card-v2__front">
				<div className="vnt-profile-card-v2__front__image">
					<img src={image} alt="Profile" />
				</div>

				<div className="vnt-profile-card-v2__front__body">
					<h4>First Last</h4>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className="vnt-profile-card-v2__front__stats">
					<div
						className="vnt-profile-card-v2__front__stats__messages"
						onClick={() => handleMessages("messages")}
					>
						{messagesDrawerIsActive ? (
							<img src={EnvelopePink} alt="envelope" />
						) : (
							<img src={Envelope} alt="envelope" />
						)}
						<span>3</span>
					</div>
					<div
						className="vnt-profile-card-v2__front__stats__views"
						onClick={() =>
							setViewsDrawerIsActive(!viewsDrawerIsActive)
						}
					>
						{viewsDrawerIsActive ? (
							<img src={EyeGreen} alt="eye" />
						) : (
							<img src={Eye} alt="eye" />
						)}
						<span>1</span>
					</div>
					<div
						className="vnt-profile-card-v2__front__stats__notifications"
						onClick={() => handleNotifications("notifications")}
					>
						{notificationsDrawerIsActive ? (
							<img src={BellRed} alt="bell" />
						) : (
							<img src={Bell} alt="bell" />
						)}
						<span>1</span>
					</div>
				</div>
			</div>

			<div
				className={`vnt-profile-card-v2__notifications-drawer ${
					notificationsDrawerIsActive ? "active" : ""
				}`}
			>
				<h3>Notifications</h3>

				<div className="vnt-profile-card-v2__notifications-drawer__notifications">
					<div>Steve commented on your photo</div>
					<div>Steve commented on your photo</div>
					<div>Steve commented on your photo</div>
					<div>Steve commented on your photo</div>
					<div>Steve commented on your photo</div>
					<div>Steve commented on your photo</div>
				</div>
			</div>

			<div
				className={`vnt-profile-card-v2__messages-drawer ${
					messagesDrawerIsActive ? "active" : ""
				}`}
			>
				<h3>Messages</h3>
				<div className="vnt-profile-card-v2__messages-drawer__messages">
					<div>Steve Steve</div>
					<div>Steve Evets</div>
					<div>Stevenson Steve</div>
				</div>
			</div>

			<div
				className={`vnt-profile-card-v2__views-drawer ${
					viewsDrawerIsActive ? "active" : ""
				}`}
			>
				<h3>Views</h3>
				<div className="vnt-profile-card-v2__views-drawer__views">
					<div className="vnt-profile-card-v2__views-drawer__views__view">
						<img src={image} alt="Profile" />
						<small>Steve</small>
					</div>

					<div className="vnt-profile-card-v2__views-drawer__views__view">
						<img src={image} alt="Profile" />
						<small>Steve</small>
					</div>

					<div className="vnt-profile-card-v2__views-drawer__views__view">
						<img src={image} alt="Profile" />
						<small>Steve</small>
					</div>

					<div className="vnt-profile-card-v2__views-drawer__views__view">
						<img src={image} alt="Profile" />
						<small>Steve</small>
					</div>

					<div className="vnt-profile-card-v2__views-drawer__views__view">
						<img src={image} alt="Profile" />
						<small>Steve</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCardV2;
