import React from 'react';

// Components
import Map from '../views/components/Map';
import ProfileImage from '../views/components/ProfileImage';
import Search from '../views/components/Search';

// Example Pages
import ExamplePage1 from '../views/pages/ExamplePage--MyMaps';
import CoordsContextProvider from '../contexts/CoordsContext';

// import image from '../assets/images/Cygnet 2.jpg';

export default {
    title: "My Maps"
};

export const basicMap = () => <CoordsContextProvider> <Map /></CoordsContextProvider>;
export const profileImage = () => <ProfileImage image={"https://via.placeholder.com/100"} name={"Brenton Milnsie"} />;
export const search = () => <Search />;

export const emaplePage1 = () => <ExamplePage1 />
