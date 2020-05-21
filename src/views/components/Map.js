import React, { useState } from 'react';

import ReactMapGL, { Marker } from 'react-map-gl';


const Map = () => {
	const [viewport, setViewport] = useState({
		width: 400,
		height: 400,
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8
	  });

	function pos() {
		navigator.geolocation.getCurrentPosition((position) => {
			setViewport({
				width: 700,
				height: 700,
				latitude: parseFloat(position.coords.latitude.toFixed(5)),
				longitude: parseFloat(position.coords.longitude.toFixed(5)),
				zoom: 14
			});
		});
	  }
	
	  return (
		<div>
			<button onClick={() => { pos() }}>Get Current Location</button>
			<div>{`Latitude ${viewport.latitude}`}</div>
			<div>{`Longitude: ${viewport.longitude}`}</div>
		
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={"pk.eyJ1IjoidmVudGVubmkiLCJhIjoiY2s5dXV5Ynh4MDVweTNlbzFtM3l4Yzg5biJ9.wOUTJYCKhxiIqSs7sMa1Gg"}
				onViewportChange={nextViewport => setViewport(nextViewport)}
			>
				<Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}>
					<div>0</div>
				</Marker>	
			</ReactMapGL>
			<div>
				<p>test git</p>
			</div>
		</div>
	  );
}
 
export default Map;