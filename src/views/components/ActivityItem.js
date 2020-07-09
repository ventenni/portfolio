import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

// Style
import '../../assets/styles/components/activity-item.scss';

const ActivityItem = ({activity, location, date}) => {
	return (
		<div className="activity-item">

			<div className="activity-item__text-items">

				<p className="activity-item__text-items__description">{activity}</p>

				<p className="activity-item__text-items__location">
					{`${location.address}`}
					<br />
					{`${location.city}, ${location.country}`}
				</p>

				<p className="activity-item__text-items__date">{date}</p>

			</div>

			<div className="activity-item__button">
				<button className="btn" onClick={() => alert(`${location.latitude}, ${location.longitude}`)}>
					<FontAwesomeIcon icon={faMapMarker} size="2x" />
				</button>
			</div>
			
			<hr />

		</div>
	);
}
 
export default ActivityItem;