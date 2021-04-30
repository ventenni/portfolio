import React, { useState } from 'react';

// External Libaries
import { Container, Row, Col } from 'react-bootstrap';

import './../../assets/styles/components/product-display.scss';

const ProductDisplay = ({ data }) => {

	const { primaryImage, variationImages, title, subtitle, description,prices, link } = data;

	const [mainImage, setMainImage] = useState(primaryImage);

	const variations = variationImages.map((image, i) => {
		return <div key={i} 
			className="vnt-product-card__variations__item"
			onMouseOver={() => setMainImage(image)}
			onMouseOut={() => setMainImage(primaryImage)}
			style={{ backgroundImage: `url(${image})`}} />
		}
	);

	return (
		<Container className="vnt-product-display">
			<Row>
				<Col xs={12} md={4} className="vnt-product-display__image-column">
					<img src={mainImage} width="100%" />
					
					<div className="vnt-product-display__image-column__variations">{variations}</div>
				</Col>
				<Col xs={12} md={8} className="vnt-product-display__info-column">
					<div className="vnt-product-display__info-column__header">
						
						<h2>{title}</h2>
						
						<h5>{subtitle}</h5>

						<p>{description}</p>

					</div>
					
					<h5 className="vnt-product-display__info-column__prices">{prices?.currentPrice}
					<span>{prices?.originalPrice} </span></h5>

					<div className="vnt-product-display__info-column__buy">
						<a className="btn btn-primary" href={link.url}>{link.text}</a>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
 
export default ProductDisplay;