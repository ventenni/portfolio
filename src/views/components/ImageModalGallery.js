import React from 'react';

// Components
import ImageModal from './ImageModal';

// Libraries
// import { v4 as uuidv4 } from 'uuid';

// Styles
import '../../assets/styles/components/image-modal-gallery.scss';

const ImageModalGallery = (props) => {
	const width = document.documentElement.offsetWidth / props.items.length;
	console.log(width);
	return (
		<div className="image-modal-gallery">
			<div className="image-modal-gallery__images">
				{props.items.map((item, index) => {
					return (
						<ImageModal image={item.image} title={item.title} />
					)
				})
			}
			</div>

			<h4>{props.items.length} Images Posted</h4>
		</div>
	);
}
 
export default ImageModalGallery;