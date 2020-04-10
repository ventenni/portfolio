import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import placeholderImage from '../assets/images/Cygnet 2.jpg';

// Page Structure
import Section from '../views/layouts/Section';
import TwoColumn from '../views/layouts/TwoColumn';
import ThreeColumn from '../views/layouts/ThreeColumn';

// Components
import ProfileCardV1 from '../views/components/ProfileCardV1';
import ProfileCardV2 from '../views/components/ProfileCardV2';
import SquareImage from "../views/components/SquareImage";
import ImageModal from "../views/components/ImageModal";

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

export const profileCardV1 = () => <ThreeProfileCard />;
export const profileCardV2 = () => <TwoProfileCard />;
export const squareImage = () => <ThreeColumnSquareImage />;
export const modal = () => <ImageModal image={placeholderImage} />;