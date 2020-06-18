import React, { createContext, useState } from 'react';

export const CoordsContext = createContext();

const CoordsContextProvider = (props) => {
	const [coords, setCoords] = useState({
		latitudeContext: 53.2734,
		longitudeContext: -7.77832031
	})

	const changeCoords = (lat, long) => {
		console.log("context coords", lat, long);
		setCoords({longitudeContext: long, latitudeContext: lat});
	}
	
	return (
		<CoordsContext.Provider value={{...coords, changeCoords}}>
			{props.children}
		</CoordsContext.Provider>
	);
}
 
export default CoordsContextProvider;