import React from 'react';

// External Libaries
import { Row, Col, Card } from 'react-bootstrap';

// styles 
import '../../assets/styles/components/product-card.scss';

const ProductCard = () => {

	return (
		<Card className="vnt-product-card">
			
			<Card.Img  variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-bb6aff55-76a2-490f-80c0-fecbef4b1d2e/air-max-2090-shoe-cmw2xw.jpg" />
			
			<Card.Body>
				<Row className="vnt-product-card__variations">
					<div xs={1} md={1} className="vnt-product-card__variations__item"
					onMouseOver={console.log("HOVER")}
					style={{ backgroundImage: "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e249e8d9-6502-4ad1-8d90-0782f1f23c5c/air-max-2090-shoe-cmw2xw.png)"}} />

					<div xs={2} md={1} className="vnt-product-card__variations__item"
					onMouseOver={console.log("HOVER")}
					style={{ backgroundImage: "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e249e8d9-6502-4ad1-8d90-0782f1f23c5c/air-max-2090-shoe-cmw2xw.png)"}} />
					
					<div xs={2} md={1} className="vnt-product-card__variations__item"
					onMouseOver={console.log("HOVER")}
					style={{ backgroundImage: "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e249e8d9-6502-4ad1-8d90-0782f1f23c5c/air-max-2090-shoe-cmw2xw.png)"}} />
					
					<div xs={2} md={1} className="vnt-product-card__variations__item"
					onMouseOver={console.log("HOVER")}
					style={{ backgroundImage: "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-e249e8d9-6502-4ad1-8d90-0782f1f23c5c/air-max-2090-shoe-cmw2xw.png)"}} />
				</Row>
			
				<Card.Title>Card Title</Card.Title>
			
				<Card.Subtitle>
					Product Description
				</Card.Subtitle>

				<p className="vnt-product-card__price">
					$123.45
					<span className="vnt-product-card__price__original">$234.56</span>
				</p>
			
				{/* <Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
				</Card.Text> */}
			
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>

		</Card>
	);
}
 
export default ProductCard;