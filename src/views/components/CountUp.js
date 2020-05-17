import React from 'react';
import {useSpring, animated} from 'react-spring';

const CountUp = () => {
	const props = useSpring(
		{ 
			x: 100, 
			from: { x: 0 },
			config: {duration: 2000} 
		});
	return (	
		<animated.svg
			strokeDashoffset={props.x}
			width="240"
			height="240"
			viewBox="0 0 24 24"
			fill="none"
			>
				<path d="M6.5 6.5H17.5V17.5H6.5V6.5Z" stroke="gold" stroke-width="1" fill="none" strokeDasharray="50" />
		</animated.svg>
	)
}
 
export default CountUp;
