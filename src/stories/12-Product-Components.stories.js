import React from 'react';

// Components
import ProductCard from '../views/components/ProductCard';
import ProductDisplay from '../views/components/ProductDisplay';

// Structure
import ThreeColumn from '../views/layouts/ThreeColumn';

// Data
import ProductCardData from './../views/data/productCardData.json';

export default {
    title: "Product Images"
};

const ThreeColumnProductCard = () => {
	return (
		<ThreeColumn
		one={<ProductCard data={ProductCardData} />}
		two={<ProductCard data={ProductCardData} />}
		three={<ProductCard data={ProductCardData} />}
		/>
	)
}

export const productCard = () => <ThreeColumnProductCard />;
export const productDisplay = () => <ProductDisplay />;
