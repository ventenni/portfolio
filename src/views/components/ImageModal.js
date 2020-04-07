import React, { useState } from 'react';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ImageModal = (props) => {
	const toggle = () => setModal(!modal);
	const [modal, setModal] = useState(false);
	return (
		<div>
			<div>
				<button onClick={toggle}>
					<img src={props.image} alt="placeholder" height="200px" width="200px" />
				</button>
			</div>

			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					<img src={props.image} alt="modal" width="100%" height="100%" />
				</ModalBody>
			</Modal>
		</div>
	);
}
 
export default ImageModal;