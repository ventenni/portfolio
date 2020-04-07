import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import placeholderImage from '../assets/images/Cygnet 2.jpg';


// Components
import ArtistCardV1 from '../views/components/ArtistCardV1';
import ArtistCardV2 from '../views/components/ArtistCardV2';
import SquareImage from "../views/components/SquareImage";
import ImageModal from "../views/components/ImageModal";

export default {
    title: "Image Components"
};

export const artistCardV1 = () => <ArtistCardV1 />;
export const artistCardV2 = () => <ArtistCardV2 />;
export const squareImage = () => <SquareImage />;
export const modal = () => <ImageModal image={placeholderImage} />;