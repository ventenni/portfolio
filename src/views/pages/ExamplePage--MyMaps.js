import React from 'react';

// Components
import Activities from '../components/Activities';
import Map from '../components/Map';
import ProfileImage from '../components/ProfileImage';
import Search from '../components/Search';

// Styles
import '../../assets/styles/components/my-maps.scss';
import CoordsContextProvider from '../../contexts/CoordsContext';


const MyMapsExmaplePage = () => {
	return (
		<div className="my-maps-page">
			<CoordsContextProvider>
				<div className="left-column">
					<ProfileImage 
					image={"https://via.placeholder.com/100"} 
					name={"Brenton Milnsie"} />
					<Search />
					<Activities />
				</div>

				<div className="right-column">
					<Map />
				</div>
			</CoordsContextProvider>
		</div>
	);
}
 
export default MyMapsExmaplePage;