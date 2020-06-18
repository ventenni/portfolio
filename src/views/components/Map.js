import React, { useState, useContext } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';

import '../../assets/styles/components/my-maps.scss';
import { CoordsContext } from '../../contexts/CoordsContext';

const Map = () => {
	const { latitudeContext, longitudeContext, changeCoords } = useContext(CoordsContext);
	
	const [viewport, setViewport] = useState({
		width: '100vw',
		height: '100vh',
		latitude: latitudeContext,
		longitude: longitudeContext,
		zoom: 8
	  });

	function pos() {
		console.log("context", latitudeContext, longitudeContext);
		navigator.geolocation.getCurrentPosition((position) => {
			setViewport({
				width: '100vw',
				height: '100vh',
				latitude: parseFloat(position.coords.latitude.toFixed(5)),
				longitude: parseFloat(position.coords.longitude.toFixed(5)),
				zoom: 14
			});
			changeCoords(position.coords.latitude.toFixed(5), position.coords.longitude.toFixed(5));
		})
	  }
	
	  return (
		<div className="map">
			<div className="map__get-location">
				<button onClick={() => { pos() }}>Get Current Location</button>
				<div>{`Latitude ${viewport.latitude}`}</div>
				<div>{`Longitude: ${viewport.longitude}`}</div>
			</div>

			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={"pk.eyJ1IjoidmVudGVubmkiLCJhIjoiY2s5dXV5Ynh4MDVweTNlbzFtM3l4Yzg5biJ9.wOUTJYCKhxiIqSs7sMa1Gg"}
				onViewportChange={nextViewport => setViewport(nextViewport)}
			>
				<Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}>
					<div>0</div>
				</Marker>	
			</ReactMapGL>
		</div>
	  );
}

export default Map;