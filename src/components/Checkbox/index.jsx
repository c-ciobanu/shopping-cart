import React from "react";
import PropTypes from "prop-types";

import { StyledCheckbox, StyledLabel } from "./styled";

function Checkbox({ name, label, ...otherProps }) {
	return (
		<div>
			<StyledCheckbox id={name} {...otherProps} />

			<StyledLabel htmlFor={name}>{label}</StyledLabel>
		</div>
	);
}

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

export default Checkbox;
