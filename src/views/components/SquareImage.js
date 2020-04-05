// React
import React from 'react';

// Components
import ThreeColumn from '../layouts/ThreeColumn';

// Assets
import image from '../../assets/images/Cygnet 2.jpg';

// Styles
import '../../styles/components/square-image.scss';

const SquareImage = (props) => {
	return (
		<div className="square-image">
			<a href="google.com.au">
				<div className="square-image__image">
					<img src={image} height="100%" width="100%" alt="cygnet" />
				</div>
				<div className="square-image__title">
					{props.title}
				</div>
				<div className="square-image__subtitle">
					{props.subtitle}
				</div>
			</a>
		</div>
	);
}
 
// export default SquareImage;


const ThreeColumnSquareImage = () => {
	return (
		<ThreeColumn 
		one={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		two={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		three={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		/>
	);
}
 
export default ThreeColumnSquareImage;
