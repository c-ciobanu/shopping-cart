import React from "react";
import PropTypes from "prop-types";

import ContextMenu from "components/ContextMenu";

import { StyledList } from "./styled";

function Lists({ options, onDelete }) {
	return (
		<div>
			{options.map((option, index) => (
				<StyledList key={`list-${index}`}>
					<span>{option}</span>

					<ContextMenu options={[{ text: "Delete", action: () => onDelete(option) }]} />
				</StyledList>
			))}
		</div>
	);
}

Lists.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onDelete: PropTypes.func.isRequired
};

export default Lists;
