import React, { useState } from 'react';

// Component


// Style
import '../../assets/styles/components/activity.scss';
import ActivityItem from './ActivityItem';

const Activities = () => {
	const [activity, setActivity] = useState([
		{
			activity: "Brent made clogs",
			location: {
				address: "Schansend 1, 1509 AW Zaandam",
				city: "Amsterdam",
				country: "Netherlands",
				latitude: "52.473460",
				longitude: "4.820280"
			},
			date: "8th June, 2019"
		},
		{
			activity: "Brent used toilet paper",
			location: {
				address: "Schansend 1, 1509 AW Zaandam",
				city: "Amsterdam",
				country: "Netherlands",
				latitude: "52.473460",
				longitude: "4.820280"
			},			
			date: "8th June, 2019"
		},
		{
			activity: "Brent sent food back for the fourth time this week",
			location: {
				address: "Schansend 1, 1509 AW Zaandam",
				city: "Amsterdam",
				country: "Netherlands",
				latitude: "52.473460",
				longitude: "4.820280"
			},
			date: "8th June, 2019"
		}
	])
	return (
		<div className="activity">
			<div className="activity__title">
				<h2>Activity</h2>
			</div>
			<div className="activity__items">
				{activity.map((item, index) => {
					return (
						<ActivityItem activity={item.activity} location={item.location} date={item.date} key={index} />
					)
				})}
			</div>
		</div>
	);
}
 
export default Activities;