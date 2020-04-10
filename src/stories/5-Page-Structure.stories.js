import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

// Components
import OneColumn from '../views/layouts/OneColumn';
import TwoColumn from '../views/layouts/TwoColumn';
import TwoColumnBigSmall from '../views/layouts/TwoColumn--big-small';
import ThreeColumn from '../views/layouts/ThreeColumn';
import FourColumn from '../views/layouts/FourColumn';

export default {
    title: "Page Structure"
};

export const oneColumn = () => <OneColumn background={'#1b76ec'} />;
export const twoColumn = () => <TwoColumn background={"#1b76ec"} />;
export const twoColumnBigSmall = () => <TwoColumnBigSmall bigBackground={"#fff00"} smallBackground={"#1b76ec"} />;
export const threeColumn = () => <ThreeColumn background={"#1b76ec"} />;
export const fourColumn = () => <FourColumn background={"#1b76ec"} />