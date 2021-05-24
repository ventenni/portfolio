import React from 'react';

// Style
import './../../assets/styles/components/button.scss';

const Button = ({ children, rounded = false, className}) => {
	const roundedEdges = rounded ? 'btn-rounded' : '';
	return (
		<a href="/" className={`button ${className} ${roundedEdges}`}>
			{children}
		</a>
	);
}
 
export default Button;