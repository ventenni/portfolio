import React from 'react';

// Style
import '../../assets/styles/components/activity-item.scss';

const ActivityItem = ({activity, location, date}) => {
	return (
		<div className="activity-item">

			<p className="activity-item__description">{activity}</p>

			<p className="activity-item__location">
				{`${location.address}`}
				<br />
				{`${location.city}, ${location.country}`}
			</p>

			<p className="activity-item__date">{date}</p>
			
			<hr />
			
		</div>
	);
}
 
export default ActivityItem;