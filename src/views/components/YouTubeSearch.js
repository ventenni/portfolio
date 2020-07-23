import React from 'react';
import { search } from '../../stories/8-Map-Components.stories';

import { API_KEY } from '../../../youtubeApiKey.json';

const YouTubeSearch = () => {

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