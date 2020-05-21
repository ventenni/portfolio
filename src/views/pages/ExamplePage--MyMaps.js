import React from 'react';

// Components
import Map from '../components/Map';
import ProfileImage from '../components/ProfileImage';
import Search from '../components/Search';

import '../../assets/styles/components/my-maps.scss';


const MyMapsExmaplePage = () => {
	return (
		<div className="my-maps">
			<div className="left-column">
				<ProfileImage />
				<Search />
			</div>

			<div className="right-column">
				<Map />
			</div>

		</div>
	);
}
 
export default MyMapsExmaplePage;