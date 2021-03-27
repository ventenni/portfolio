import React, { useState } from 'react';

// External Libaries
import { Row, Card } from 'react-bootstrap';

// styles 
import '../../assets/styles/components/product-card.scss';

const ProductCard = ({ data }) => {

	const { primaryImage, variationImages, title, subtitle, prices, link } = data;

	const [mainImage, setMainImage] = useState(primaryImage);

	const variations = variationImages.map((image, i) => {
		return <div key={i} 
			className="vnt-product-card__variations__item"
			onMouseOver={() => setMainImage(image)}
			onMouseOut={() => setMainImage(primaryImage)}
			style={{ backgroundImage: `url(${image})`}} />
		}
	)

	return (
		<a href={link.url} className="vnt-product-card card">
			
			<Card.Img  variant="top" src={mainImage} />
			
			<Card.Body>
				<Row className="vnt-product-card__variations">
					{variations}
				</Row>
			
				<Card.Title>{title}</Card.Title>
			
				<Card.Subtitle>
					{subtitle}
				</Card.Subtitle>

				<p className="vnt-product-card__price">
					{prices.currentPrice}
					{prices.originalPrice && 
						<span className="vnt-product-card__price__original">
							{prices.originalPrice}
						</span>
					}
				</p>
			</Card.Body>

		</a>
	);
}
 
export default ProductCard;