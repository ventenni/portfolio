import React from 'react';

// Stylesheet
import '../../assets/styles/components/image-gallery.scss';

// Mock Data
import imageData from './../data/imageGalleryData.json';

const ImageGallery = () => {

	return (
		<div className="image-gallery">

			{
				imageData.map((item, i) => {
					return <div className="image-gallery__image">
						<img src={item.url} alt={item.alt} />
					</div>
				})
			}

		</div>
	);
}
 
export default ImageGallery;