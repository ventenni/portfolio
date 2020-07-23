import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import placeholderImage from '../assets/images/Cygnet 2.jpg';
import placeholderImage2 from '../assets/images/DSC_4780.jpg';

// Page Structure
import Section from '../views/layouts/Section';
import OneColumn from '../views/layouts/OneColumn';
import TwoColumn from '../views/layouts/TwoColumn';
import ThreeColumn from '../views/layouts/ThreeColumn';
// import FourColumn from '../views/layouts/FourColumn';

// Components
import Carousel from "../views/components/Carousel";
import ImageModal from "../views/components/ImageModal";
import ProfileCardV1 from '../views/components/ProfileCardV1';
import ProfileCardV2 from '../views/components/ProfileCardV2';
import ProfileCoverCard from '../views/components/ProfileCoverCard';
import SquareImage from "../views/components/SquareImage";
import ImageModalGallery from '../views/components/ImageModalGallery';

const modalGalleryData = [
    {
        image: placeholderImage,
        title: "placeholder 1"
    },
    {
        image: placeholderImage2,
        title: "placeholder 2"
    },
    {
        image: placeholderImage,
        title: "placeholder 1"
    },
    {
        image: placeholderImage2,
        title: "placeholder 2"
    },
    {
        image: placeholderImage,
        title: "placeholder 1"
    }
]

export default {
    title: "Image Components"
};

const ThreeProfileCard = () => {
    return (
        <ThreeColumn 
            one={<ProfileCardV1 name={'lorem ipsum'} title={'title'} description={'Deserunt magna ipsum nostrud duis consectetur pariatur proident enim labore nostrud sint officia et. Est ullamco do velit consectetur occaecat. Ea in labore adipisicing ut ut elit anim Lorem laborum magna ipsum dolor.'} />} 
            two={<ProfileCardV1 name={'lorem ipsum'} title={'title'} />} 
            three={<ProfileCardV1 name={'lorem ipsum'} title={'title'} />} 
        />
    );
}

const TwoProfileCard = () => {
    return (
        <Section className="test">
            <TwoColumn
                one={<ProfileCardV2 name={'lorem ipsum'} title={'title'} description={"Deserunt magna ipsum nostrud duis consectetur pariatur proident enim labore nostrud sint officia et. Est ullamco do velit consectetur occaecat. Ea in labore adipisicing ut ut elit anim Lorem laborum magna ipsum dolor."} />} 
                two={<ProfileCardV2 name={'lorem ipsum'} title={'title'} description={"Deserunt magna ipsum nostrud duis consectetur pariatur proident enim labore nostrud sint officia et. Est ullamco do velit consectetur occaecat. Ea in labore adipisicing ut ut elit anim Lorem laborum magna ipsum dolor."} />} 
            />
        </Section>
    );
}

const ThreeColumnSquareImage = () => {
	return (
		<ThreeColumn 
		one={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		two={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		three={<SquareImage title={"Title"} subtitle={"Subtitle"} />}
		/>
	);
}

const ThreeColumnProfileCoverCard = () => {
    return (
        <ThreeColumn
            one={<ProfileCoverCard profileImage={placeholderImage} />}
            two={<ProfileCoverCard profileImage={placeholderImage} />}
            three={<ProfileCoverCard profileImage={placeholderImage} />}
        />
    )
}

const CarouselOneColumn = () => {
    return (
        <OneColumn one={<Carousel />} />
    )
}

const ModalGallery = () => {
    return (
        <ImageModalGallery items={modalGalleryData} />
    )
}

// export const carousel = () => <CarouselOneColumn />
export const modal = () => <ImageModal image={placeholderImage} />;
export const modalGallery = () => <ModalGallery />
export const profileCardV1 = () => <ThreeProfileCard />;
export const profileCardV2 = () => <TwoProfileCard />;
export const profileCoverCard = () => <ThreeColumnProfileCoverCard />;
export const squareImage = () => <ThreeColumnSquareImage />;