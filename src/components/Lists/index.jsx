import React from "react";
import PropTypes from "prop-types";

import ContextMenu from "components/ContextMenu";
import Stack from "components/Stack";

import { StyledList, StyledLink } from "./styled";

function Lists({ options, onDelete }) {
	if (!options.length) {
		return null;
	}

	return (
		<Stack space="sm" component="ul">
			{options.map((option) => (
				<StyledList key={`list-${option.id}`}>
					<StyledLink to={option.link}>{option.name}</StyledLink>

					<ContextMenu options={[{ text: "Delete", action: () => onDelete(option) }]} />
				</StyledList>
			))}
		</Stack>
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
