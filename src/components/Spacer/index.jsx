import React from "react";
import PropTypes from "prop-types";

import { StyledDiv } from "./styled";
import { sizes } from "./consts";

const sizeNames = Object.keys(sizes);

function Spacer({ size }) {
	return <StyledDiv height={sizes[size]} />;
}

Spacer.propTypes = {
	size: PropTypes.oneOf(sizeNames).isRequired
};

export default Spacer;
