import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Styles
import '../../styles/base/structure.scss';

const FourColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<Container className="four-column">
			<Row>
				<Col className="col" xs={12} md={6} lg={3} style={styles}>
					{props.one}
				</Col>
				<Col className="col" xs={12} md={6} lg={3} style={styles}>
					{props.two}
				</Col>
				<Col className="col" xs={12} md={6} lg={3} style={styles}>
					{props.three}
				</Col>
				<Col className="col" xs={12} md={6} lg={3} style={styles}>
					{props.three}
				</Col>
			</Row>
		</Container>
	);
}
 
export default FourColumn;