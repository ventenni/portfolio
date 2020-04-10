import React from 'react';

// Styles
import '../../styles/components/general-copy.scss';

const GeneralCopy = (props) => {
	return (
		<div className="general-copy">
			<p>{props.copy}</p>
		</div>
	);
}
 
export default GeneralCopy;