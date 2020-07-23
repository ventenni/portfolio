import React from 'react';

// Components
import ImageModal from './ImageModal';

// Libraries
import { v4 as uuidv4 } from 'uuid';

// Styles
import '../../assets/styles/components/image-modal-gallery.scss';

const ImageModalGallery = (props) => {
	const width = document.documentElement.offsetWidth / props.items.length;
	console.log(width);
	return (
		<div className="image-modal-gallery">
			{props.items.map((item, index) => {
				return (
					<div key={uuidv4()} style={{width: width}}>
						<ImageModal image={item.image} title={item.title} />
					</div>
				)
			})
		}
		</div>
	);
}
 
export default ImageModalGallery;