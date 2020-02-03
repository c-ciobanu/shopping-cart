import React from "react";
import PropTypes from "prop-types";

import { StyledList, StyledListItem, StyledItemName, StyledTrashIcon } from "./styled";

function Items({ options, onChange, onDelete }) {
	const handleChange = (item, newVal) => {
		onChange(item, newVal);
	};

	return (
		<StyledList>
			{options.map((option) => (
				<StyledListItem key={`item-${option.name}`}>
					<input type="checkbox" onChange={(e) => handleChange(option.name, e.target.checked)} />

					<StyledItemName>{option.name}</StyledItemName>

					<StyledTrashIcon onClick={() => onDelete(option)} />
				</StyledListItem>
			))}
		</StyledList>
	);
}

Items.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			bought: PropTypes.bool.isRequired
		})
	).isRequired,
	onChange: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default Items;
