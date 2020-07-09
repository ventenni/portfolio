import React from 'react';
import { search } from '../../stories/8-Map-Components.stories';

const YouTubeSearch = () => {
	const API_KEY = 'AIzaSyACafPKPEEb1_7ppy7fN-Vv_28oszGoS9A';

	function search(query) {
		window.fetch(`https://www.googleapis.com/youtube/v3/search?access_token=${API_KEY}?part=${query}`);
	}

	return (
		<div>
			<button onClick={search('potato')}>
				Test API
			</button>
		</div>
	);
}
 
export default YouTubeSearch;