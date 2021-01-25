import React, { useState } from 'react';

// Libraries
const {
	Container, Row, Col,
	Collapse
} = require('reactstrap');

const AttractionCard = ({attraction}) => {
	const [collapse, setCollapse] = useState(false);
	const [collapseText, setCollapseText] = useState("show");
	const [mobile, setMobile] = useState(false);

	return (
		<Container className="attraction-card">
			<Row className="top-box">
				<Col xs={12} className="image-container">
					<a className="a-link" href={attraction.url} {...attraction.attributes} target={
						attraction.urlTargetWindow && attraction.urlTargetWindow.length
							? attraction.urlTargetWindow
							: '_self'
					}>

						<div className="card-image" style={{backgroundImage: `url(https://via.placeholder.com/1000)`}}>
						</div>

					</a>
				</Col>
				<Col xs={12}>
					<div className="card-description">
						<h3>
							<a href={attraction.url} {...attraction.attributes} target={
								attraction.urlTargetWindow && attraction.urlTargetWindow.length
									? attraction.urlTargetWindow
									: '_self'
							}>
								{attraction.name}
							</a>
						</h3>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
 
export default AttractionCard;