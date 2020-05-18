import React from 'react';
import { Col } from 'reactstrap';

// Styles
import '../../assets/styles/base/structure.scss';

const TwoColumn = (props) => {
	const styles = props.background ? {background: props.background} : {};
	return (
		<React.Fragment>
			<Col className="column-test" xs={12} md={6} style={styles}>
				{props.one}
			</Col>
			<Col xs={12} md={6} style={styles}>
				{props.two}
			</Col>
		</React.Fragment>
	);
}

export default TwoColumn;