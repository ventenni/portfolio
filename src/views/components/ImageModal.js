import React, { useState } from 'react';

// Libraries
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// Styles
import '../../assets/styles/components/image-modal.scss';

const ImageModal = (props) => {
	const toggle = () => setModal(!modal);
	const [modal, setModal] = useState(false);

	return (
		<div className="image-modal">

			<div className="image-modal__image" onClick={toggle}>
				<img src={props.image} alt="placeholder" height="100%" width="100%" />
			</div>

			<Modal isOpen={modal} toggle={toggle}>
				<ModalBody>
					<img src={props.image} alt="modal" width="100%" height="100%" />

					<ModalHeader toggle={toggle}>{props.title}</ModalHeader>
				</ModalBody>
			</Modal>
		</div>
	);
}
 
export default ImageModal;