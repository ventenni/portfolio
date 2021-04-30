import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../assets/styles/base/structure.scss';

const TwoColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<Container>
			<Row>
				<Col xs={12} md={6} style={styles}>
					{props.one}
				</Col>
				<Col xs={12} md={6} style={styles}>
					{props.two}
				</Col>
			</Row>
		</Container>
	);
}

export default TwoColumn;