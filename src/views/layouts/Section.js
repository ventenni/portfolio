import React from 'react';
import { Container, Row} from 'reactstrap';

const Section = (props) => {
	return (
		<Container className="test">
			<Row>
				{props.children}
			</Row>
		</Container>
	);
}
 
export default Section;