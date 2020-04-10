import React, { useState } from 'react';

// Page Structure
import Section from '../layouts/Section';
import OneColumn from '../layouts/OneColumn';
import TwoColumn from '../layouts/TwoColumn';
import ThreeColumn from '../layouts/ThreeColumn';
// import FourColumn from '../layouts/FourColumn';

// Components
import Hero from '../components/Hero';
import ImageModal from '../components/ImageModal';
import ImageModalGallery from '../components/ImageModalGallery';
import ProfileCardV1 from '../components/ProfileCardV1';
import SquareImage from '../components/SquareImage';

// Assets
import placeholderImage from '../../assets/images/Cygnet 2.jpg';

const ExamplePage1 = () => {
	const [imageModalGalleryState, setImageModalGalleryState] = useState(
		[
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			},
			{
				"image": placeholderImage
			}
		]
	);

	return (
		<div>
			<Hero image={`url(http://ferno.com.pl/wp-content/uploads/2015/05/1-2000x500.jpg)`} />

			<Section>
				<ThreeColumn 
					one={<ProfileCardV1 name={"First Last"} title={"Title"} description={"Consequat voluptate occaecat aliqua culpa commodo velit. Ullamco minim dolor eu ea ullamco sint anim tempor. In ullamco ipsum aliqua ex esse excepteur ullamco occaecat."} />}
					two={<ProfileCardV1 name={"First Last"} title={"Title"} description={"Consequat voluptate occaecat aliqua culpa commodo velit. Ullamco minim dolor eu ea ullamco sint anim tempor. In ullamco ipsum aliqua ex esse excepteur ullamco occaecat."} />}
					three={<ProfileCardV1 name={"First Last"} title={"Title"} description={"Consequat voluptate occaecat aliqua culpa commodo velit. Ullamco minim dolor eu ea ullamco sint anim tempor. In ullamco ipsum aliqua ex esse excepteur ullamco occaecat."} />}
				/>
			</Section>

			<Section>
				<TwoColumn 
					one={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
					two={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
				/>
			</Section>

			<Section fluid={true}>
				<ImageModalGallery items={imageModalGalleryState} />
			</Section>
		</div>
	);
}
 
export default ExamplePage1;