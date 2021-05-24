import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

// Mock Data
import placeholderImage from "../assets/images/Cygnet 2.jpg";
import placeholderImage2 from "../assets/images/DSC_4780.jpg";
// import ImageModalGalleryData from '../views/data/imageModalGalleryData.json';

// Page Structure
import Section from "../views/layouts/Section";
// import OneColumn from '../views/layouts/OneColumn';
import TwoColumn from "../views/layouts/TwoColumn";
import ThreeColumn from "../views/layouts/ThreeColumn";
// import FourColumn from '../views/layouts/FourColumn';

// Components
// import Carousel from "../views/components/Carousel";
import FiftyFifty from "../views/components/FiftyFifty";
import ImageModal from "../views/components/ImageModal";
import ImageModalGallery from "../views/components/ImageModalGallery";
import SquareImage from "../views/components/SquareImage";

// Data
const modalGalleryData = [
	{
		image: placeholderImage,
		title: "placeholder 1",
	},
	{
		image: placeholderImage2,
		title: "placeholder 2",
	},
	{
		image: placeholderImage,
		title: "placeholder 1",
	},
	{
		image: placeholderImage2,
		title: "placeholder 2",
	},
	{
		image: placeholderImage,
		title: "placeholder 1",
	},
];

export default {
	title: "Image Components",
};

const ThreeColumnSquareImage = () => {
	return (
		<ThreeColumn
			one={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
			two={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
			three={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		/>
	);
};

const ModalGallery = () => {
	return <ImageModalGallery items={modalGalleryData} />;
};

export const fiftyFifty = () => <FiftyFifty />;
export const modal = () => <ImageModal image={placeholderImage} />;
export const modalGallery = () => <ModalGallery />;
export const squareImage = () => <ThreeColumnSquareImage />;
