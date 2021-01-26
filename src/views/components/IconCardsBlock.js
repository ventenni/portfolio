import React from 'react';

// Custom Components
import IconCard from './IconCard';

// Libraries
import { Container, Row, Col } from 'react-bootstrap';

// Sass
import './../../assets/styles/components/icon-cards-block.scss';

// Dummy Data
import data from './../data/iconCardsBlockData.json';

const IconCards = () => {

	return (
		<Container className="vnt-icon-cards-block">
			<Row>

				<Col xs={12} lg={4} className="vnt-icon-cards-block__body">
					<h1>Heading Placeholder</h1>

					<p>
					Deserunt exercitation amet elit duis ipsum minim quis 
					fugiat occaecat. Dolore cupidatat tempor ipsum amet adipisicing laborum amet
					</p>

				</Col>

				<Col xs={12} lg={8} className="vnt-icon-cards-block__cards">
				{
					data.iconCards.map(item => <IconCard data={item} />)
				}
				</Col>

			</Row>

		</Container>
	);
}
 
export default IconCards;