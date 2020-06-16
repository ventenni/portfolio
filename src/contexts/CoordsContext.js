import React, { createContext, useState } from 'react';

export const CoordsContext = createContext();

const CoordsContextProvider = (props) => {
	const [coords, setCoords] = useState({
		latitude: 53.2734,
		longitude: -7.77832031
	})

	const changeCoords = (lat, long) => {
		console.log("context coords", lat, long);
		setCoords({longitude: long, latitude: lat});
	}
	return (
		<CoordsContext.Provider value={{...coords, changeCoords}}>
			{props.children}
		</CoordsContext.Provider>
	);
}
 
export default CoordsContextProvider;