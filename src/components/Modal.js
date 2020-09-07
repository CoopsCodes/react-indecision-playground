import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selected}
		onRequestClose={props.closeModal}
		contentLabel="Selected Option Modal"
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Today you shall</h3>
		{props.selected && <p className="modal__selected">{props.selected}</p>}

		<button className="button" onClick={props.closeModal}>
			Close
		</button>
	</Modal>
);

// alternate option for a ternary operator, other than the truthy check used above
// {props.selected ? props.selected : undefined}
export default OptionModal;
