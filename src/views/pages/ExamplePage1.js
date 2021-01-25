import React, { useState } from 'react';

// Page Structure
import Section from '../layouts/Section';
import OneColumn from '../layouts/OneColumn';
import TwoColumn from '../layouts/TwoColumn';
import ThreeColumn from '../layouts/ThreeColumn';
// import FourColumn from '../layouts/FourColumn';

// Components
import GeneralCopy from '../components/GeneralCopy';
import Hero from '../components/Hero';
import ImageModalGallery from '../components/ImageModalGallery';
import ProfileCardV1 from '../components/ProfileCardV1';
import SquareImage from '../components/SquareImage';

// Assets
import placeholderImage from '../../assets/images/Cygnet 2.jpg';

// Data
import generalCopyData from '../data/generalCopyData.json';

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
			}
		]
	);

		setImageModalGalleryState(
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
		});

	const [generalCopyState, setGeneralCopyState] = useState();

	setGeneralCopyState(generalCopyData);

	console.log(generalCopyState);
	return (
		<div>
			<Hero image={`url(http://ferno.com.pl/wp-content/uploads/2015/05/1-2000x500.jpg)`} heading={"Example Page"} />

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

			<Section>
				<OneColumn one={<GeneralCopy copy={generalCopyState.copy} />} />
			</Section>
		</div>
	);
}
 
export default ExamplePage1;