import React, { useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as PlusIcon } from "assets/svg/plus.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check.svg";

import { StyledForm, StyledButton, StyledInput, StyledDiv } from "./styled";

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

	const handleInputBlur = (e) => {
		const { relatedTarget } = e;

		if (!relatedTarget || relatedTarget.type !== "submit") {
			setIsAddMode(false);
		}
	};

	return isAddMode ? (
		<StyledForm onSubmit={handleSubmit}>
			<StyledInput
				type="text"
				onChange={handleInputChange}
				onBlur={handleInputBlur}
				placeholder={placeholder}
				autoFocus={true}
			/>

			<StyledButton type="submit" title={title} disabled={inputValue === ""}>
				<CheckIcon />
			</StyledButton>
		</StyledForm>
	) : (
		<StyledDiv>
			<StyledButton type="button" title={title} onClick={() => setIsAddMode(true)}>
				<PlusIcon />
			</StyledButton>
		</StyledDiv>
	);
}

AddItemIcon.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	title: PropTypes.string
};

export default AddItemIcon;
