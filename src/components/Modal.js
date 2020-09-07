import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selected}
		onRequestClose={props.closeModal}
		contentLabel="Selected Option Modal"
	>
		<h3>Today you shall</h3>
		{props.selected && <p>{props.selected}</p>}

		<button onClick={props.closeModal}>Close</button>
	</Modal>
);

// alternate option for a ternary operator, other than the truthy check used above
// {props.selected ? props.selected : undefined}
export default OptionModal;
