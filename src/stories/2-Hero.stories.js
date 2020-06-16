import React from 'react';

import Hero from '../views/components/Hero';

import placeholderImage2 from '../assets/images/DSC_4780.jpg';

export default {
    title: "Hero Images"
};

export const basicHero = () => <Hero image={`url(http://ferno.com.pl/wp-content/uploads/2015/05/1-2000x500.jpg)`} />;
export const basicHeroWithHeader = () => <Hero heading={"Heading Text"} image={`url(http://ferno.com.pl/wp-content/uploads/2015/05/1-2000x500.jpg)`} />