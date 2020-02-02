import React from "react";
import PropTypes from "prop-types";

import ContextMenu from "components/ContextMenu";

import { StyledList, StyledLink } from "./styled";

function Lists({ options, onDelete }) {
	return (
		<div>
			{options.map((option) => (
				<StyledList key={`list-${option.id}`}>
					<StyledLink to={option.link}>{option.name}</StyledLink>

					<ContextMenu options={[{ text: "Delete", action: () => onDelete(option) }]} />
				</StyledList>
			))}
		</div>
	);
}

Lists.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			link: PropTypes.string.isRequired
		})
	).isRequired,
	onDelete: PropTypes.func.isRequired
};

export default Lists;
