import React from 'react';

// Components
import ImageGallery from '../views/components/ImageGallery';
import Map from '../views/components/Map';
import ProfileImage from '../views/components/ProfileImage';
import Search from '../views/components/Search';

// Example Pages
import ExamplePage1 from '../views/pages/ExamplePage--MyMaps';
import ExamplePage2 from '../views/pages/ExamplePage--MyMaps2';
import CoordsContextProvider from '../contexts/CoordsContext';

// import image from '../assets/images/Cygnet 2.jpg';

export default {
    title: "My Maps"
};

export const basicMap = () => <CoordsContextProvider> <Map /></CoordsContextProvider>;
export const imageGallery = () => <ImageGallery />;
export const profileImage = () => <ProfileImage image={"https://via.placeholder.com/100"} name={"Brenton Milnsie"} />;
export const search = () => <Search />;

export const examplePage1 = () => <ExamplePage1 />
export const examplePage2 = () => <ExamplePage2 />
