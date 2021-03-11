import React from "react";
import PropTypes from "prop-types";

import { StyledInput } from "./styled";

function FormInput({ onSubmit, placeholder }) {
	let inputValue = "";

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(inputValue);

		e.target.reset();
	};

	const handleInputChange = (e) => {
		inputValue = e.target.value;
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledInput type="text" onChange={handleInputChange} placeholder={placeholder} />
		</form>
	);
}

FormInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};

export default FormInput;
