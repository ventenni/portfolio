import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../styles/base/structure.scss';

const TwoColumn = (props) => {
	const bigStyles = props.bigBackground ? {background: props.bigBackground} : {};
	const smallStyles = props.smallBackground ? {background: props.smallBackground} : {};
	return (
		<Container className="two-column big-small">
			<Row>
				<Col xs={12} md={9} style={bigStyles}>
					{props.one}
				</Col>
				<Col xs={12} md={3} style={smallStyles}>
					{props.two}
				</Col>
			</Row>
		</Container>
	);
}
 
export default TwoColumn;