import React from 'react';

// Libraries

// Sass
import './../../assets/styles/global.scss';

const IconCard = ({ data }) => {

	const heading = data.heading ? data.heading : "Heading Placeholder";
	const copy = data.copy ? data.copy : "Elit cillum veniam aliquip do voluptate Lorem magna nostrud. Fugiat nostrud ipsum sint sint ad eu sunt irure. Ex officia labore";
	const icon = data.icon ? data.icon : "500px";

	return (
		<div className="vnt-icon-card">

			<div className="vnt-icon-card__heading">
				<i className={`vnt-icon vnt-icon__${icon}`}></i>

				<h3>{heading}</h3>
			</div>

			<div className="vnt-icon-card__body">
				{copy}
			</div>

		</div>
	);
}
 
export default IconCard;
