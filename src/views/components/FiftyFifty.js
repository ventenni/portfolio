// React
import React from 'react';

// Libaries
import { Row, Col } from 'react-bootstrap';

// Sass
import './../../assets/styles/components/fifty-fifty.scss';

const FiftyFifty = ({ heading, copy, image }) => {

	return (
		<Row className="vnt-fity-fifty">
			
			<Col xs={12} lg={6} className="centered-image">

				<img src={image} alt="trees" />

			</Col>

			
			<Col xs={12} lg={6} className="vrtp-general-copy">
				{heading &&
					<h4>{heading}</h4>
				}

				{this.props.data && this.props.data.copy &&
					<div>{copy}</div>
				}

			</Col>
		</Row>
	);
}
 
export default FiftyFifty;


