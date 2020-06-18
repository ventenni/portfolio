import React from 'react';

import '../../assets/styles/components/welcome-page.scss';

const Welcome = () => {
	return (
		<div className="welcome-page">
			<h1 className="welcome-page__header">Welcome to my Storybook Portfolio</h1>

			<p className="welcome-page__disclaimer">*This portfolio is very much a work in progress.</p>

			<p>
				This is a constantly growing collection of front-end components I have created.  
			</p>
		</div>
	);
}

export default Welcome;