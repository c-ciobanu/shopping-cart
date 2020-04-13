import React from "react";
import PropTypes from "prop-types";

import { StyledDiv } from "./styled";
import { sizes } from "./consts";

const sizeNames = Object.keys(sizes);

function Stack({ space, children }) {
	return <StyledDiv gap={sizes[space]}>{children}</StyledDiv>;
}

Stack.propTypes = {
	space: PropTypes.oneOf(sizeNames).isRequired,
	children: PropTypes.node.isRequired
};

export default Stack;
