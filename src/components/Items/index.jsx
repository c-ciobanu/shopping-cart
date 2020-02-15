import React from "react";
import PropTypes from "prop-types";

import Checkbox from "components/Checkbox";

import { StyledList, StyledListItem, StyledTrashIcon } from "./styled";

function Items({ options, onChange, onDelete }) {
	const handleChange = (item, newVal) => {
		onChange(item, newVal);
	};

	return (
		<StyledList>
			{options.map((option) => (
				<StyledListItem key={`item-${option.name}`}>
					<Checkbox name={option.name} label={option.name} onChange={(e) => handleChange(option, e.target.checked)} />

					<StyledTrashIcon onClick={() => onDelete(option)} data-testid={`remove-item-${option.name}`} />
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
