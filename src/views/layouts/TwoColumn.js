import React from 'react';
import { Col } from 'reactstrap';

// Styles
import '../../styles/base/structure.scss';
import Section from './Section';

const TwoColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<Section>
			<Col className="column-test" xs={12} md={6} style={styles}>
				{props.one}
			</Col>
			<Col xs={12} md={6} style={styles}>
				{props.two}
			</Col>
		</Section>
	);
}
 
export default TwoColumn;