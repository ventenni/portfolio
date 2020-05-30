import React from 'react';

// Components
import Activities from '../components/Activities';
import Map from '../components/Map';
import ProfileImage from '../components/ProfileImage';
import Search from '../components/Search';

// Styles
import '../../assets/styles/components/my-maps.scss';


const MyMapsExmaplePage = () => {
	return (
		<div className="my-maps-page">
			<div className="left-column">
				<ProfileImage image={"https://via.placeholder.com/100"} name={"Brenton Milnsie"} />
				<Search />
				<Activities />
			</div>

			<div className="right-column">
				<Map />
			</div>

		</div>
	);
}
 
export default MyMapsExmaplePage;