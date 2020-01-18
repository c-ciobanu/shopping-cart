import React, { useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as PlusIcon } from "assets/svg/plus.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check.svg";

import { StyledForm, StyledButton, StyledInput } from "./styled";

function AddItemIcon({ onSubmit, placeholder, title }) {
	const [isAddMode, setIsAddMode] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(inputValue);

		e.target.reset();
		setIsAddMode(false);
		setInputValue("");
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<div>{isAddMode ? <StyledInput type="text" onChange={handleInputChange} placeholder={placeholder} /> : null}</div>

			<StyledButton
				type={isAddMode ? "submit" : "button"}
				title={title}
				onClick={isAddMode ? null : () => setIsAddMode(true)}
				disabled={isAddMode && inputValue === ""}
			>
				{isAddMode ? <CheckIcon /> : <PlusIcon />}
			</StyledButton>
		</StyledForm>
	);
}

AddItemIcon.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	title: PropTypes.string
};

export default AddItemIcon;
