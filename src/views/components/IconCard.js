import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


// Sass
import './../../assets/styles/components/icon-card.scss';

const IconCard = ({ data }) => {

	const heading = data.heading ? data.heading : "Heading Placeholder";
	const copy = data.copy ? data.copy : "Elit cillum veniam aliquip do voluptate Lorem magna nostrud. Fugiat nostrud ipsum sint sint ad eu sunt irure. Ex officia labore";

	return (
		<div className="vnt-icon-card">
			<div className="vnt-icon-card__heading">
				<FontAwesomeIcon icon={faCoffee} />

				<h3>{heading}</h3>
			</div>

			<div className="vnt-icon-card__body">
				{copy}
			</div>
		</div>
	);
}
 
export default IconCard;