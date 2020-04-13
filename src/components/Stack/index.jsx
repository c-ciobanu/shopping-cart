import React from "react";
import PropTypes from "prop-types";

import { StyledDiv } from "./styled";
import { sizes } from "./consts";

const sizeNames = Object.keys(sizes);
const tags = ["div", "ul"];

function Stack({ space, children, component }) {
	return (
		<StyledDiv as={component} gap={sizes[space]}>
			{children}
		</StyledDiv>
	);
}

Stack.defaultProps = {
	component: "div"
};

Stack.propTypes = {
	space: PropTypes.oneOf(sizeNames).isRequired,
	children: PropTypes.node.isRequired,
	component: PropTypes.oneOf(tags)
};

export default Stack;
