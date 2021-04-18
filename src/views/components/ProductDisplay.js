import React, { useState } from 'react';

// External Libaries
import { Container, Row, Col } from 'react-bootstrap';

const ProductDisplay = () => {
	const [primaryImage, setPrimaryImage] = useState("");

	return (
		<Container>
			<Row className="vnt-product-display">
				<Col className="vnt-product-display__image-column">

				</Col>
				<Col className="vnt-product-display__info-column">
					<div className="vnt-product-display__info-column__header">
						<h2>Product Title</h2>

						<h5>$123.45</h5>
					</div>

					<div className="vnt-product-display__info-column__buy">
						<a className="btn btn-primary" href="/">Buy Now</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
 
export default ProductDisplay;