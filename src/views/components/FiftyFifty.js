// React
import React from 'react';

// Libaries
import { Row, Col } from 'react-bootstrap';

// Sass
import '../../assets/styles/components/fifty-fifty.scss';

const FiftyFifty = () => {

	const styles = { backgroundImage: `url(https://via.placeholder.com/600x400)`};

	return (
		<Row className="vnt-fifty-fifty">
			
			<Col xs={12} lg={6} className="vnt-fifty-fifty__image" style={styles} />
			
			<Col xs={12} lg={6} className="vnt-fifty-fifty__copy">
				
				<h4 className="vnt-fifty-fifty__copy__title">Heading</h4>

				<p className="vnt-fifty-fifty__copy__text">
					Tempor ut laboris est cupidatat irure in excepteur proident duis sint culpa enim anim. 
					Qui non do magna amet Lorem eiusmod adipisicing. Nulla do consectetur occaecat culpa. Ipsum occaecat ex elit Lorem amet. 
					Aute ullamco consequat ipsum eiusmod amet duis sunt esse. Ipsum proident id est ea qui id sunt. Occaecat aute sunt excepteur eu cillum cillum nostrud culpa velit.
				</p>

			</Col>
		</Row>
	);
}
 
export default FiftyFifty;


