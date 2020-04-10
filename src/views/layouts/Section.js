import React from 'react';
import { Container, Row} from 'reactstrap';

const Section = (props) => {
	return (
		<Container fluid={props.fluid} className="test">
			<Row>
				{props.children}
			</Row>
		</Container>
	);
}
 
export default Section;