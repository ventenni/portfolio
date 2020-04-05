import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../styles/base/structure.scss';

const TwoColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<Container className="two-column big-small">
			<Row>
				<Col className="col" xs={12} md={9} style={styles}>
					{props.one}
				</Col>
				<Col className="col" xs={12} md={3} style={styles}>
					{props.two}
				</Col>
			</Row>
		</Container>
	);
}
 
export default TwoColumn;