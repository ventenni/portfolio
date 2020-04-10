import React from 'react';

// Components
import ImageModal from './ImageModal';

// Styles
import '../../styles/components/image-modal-gallery.scss';

const ImageModalGallery = (props) => {
	const images = props;
	console.log(images);
	return (
		<div className="image-modal-gallery">
			{props.items.map((item, index) => {
				return (
					<ImageModal key={index} image={item.image} />
				)
			})
		}
		</div>
	);
}
 
export default ImageModalGallery;