import React from 'react';

// stylesheet
import './../../assets/styles/pages/my-maps2.scss';
import ProfileImage from '../components/ProfileImage';
import ImageModalGallery from '../components/ImageModalGallery';

// Mock Data
import placeholderImage from './../../assets/images/Cygnet 2.jpg';
import placeholderImage2 from './../../assets/images/DSC_4780.jpg';
import Section from '../layouts/Section';

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
    },
    {
        image: placeholderImage,
        title: "placeholder 1"
    }
];

const MyMaps2 = () => {
	return (
		<div className="page-layout">
			<div className="profile">
				
				<h1>PROFILE</h1>

				<Section>
					<ProfileImage image={"https://via.placeholder.com/100"} name={"Brenton Milnsie"} />
				</Section>

				<Section>
					<ImageModalGallery items={modalGalleryData} />
				</Section>

			</div>
			
			<div className="discover">
				DISCOVER
			</div>
			
			<div className="my-log">
				MY LOG
			</div>

			<div className="activity">
				ACTIVITY
			</div>

		</div>
	);
}
 
export default MyMaps2;