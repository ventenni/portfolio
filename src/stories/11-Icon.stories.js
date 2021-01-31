import React from 'react';


// Icon Cards Block
import IconCardsBlock from '../views/components/IconCardsBlock';
import IconCardsBlockData from './../views/data/iconCardsBlockData.json';

export default {
    title: "Icon Components"
};


export const iconCardsBlock = () => <IconCardsBlock data={IconCardsBlockData} />;
