import React from 'react';

// Custom Components
import IconCard from './IconCard';

// Libraries
import { Container, Row, Col } from 'react-bootstrap';

// Sass
import './../../assets/styles/components/icon-cards-block.scss';

const IconCards = ({ data }) => {

	const { heading, copy, iconCards } = data;

	return (
		<Container className="vnt-icon-cards-block">
			<Row>

				<Col xs={12} lg={4} className="vnt-icon-cards-block__body">
					<h1 className="vnt-icon-cards-block__body__heading">{heading}</h1>


					<div dangerouslySetInnerHTML={{__html: copy}} />

				</Col>

				<Col xs={12} lg={8} className="vnt-icon-cards-block__cards">
				{
					iconCards.map((item, index) => <IconCard data={item} key={index} />)
				}
				</Col>

			</Row>

		</Container>
	);
}
 
export default IconCards;