import React from "react";
import PropTypes from "prop-types";
import { useSelect } from "downshift";

import { ReactComponent as MoreIcon } from "assets/svg/more.svg";

import { StyledContainer, StyledMenu, StyledMenuItem, StyledButton } from "./styled";

function ContextMenu({ options }) {
	const { isOpen, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
		items: options
	});

	return (
		<StyledContainer>
			<StyledButton {...getToggleButtonProps()}>
				<MoreIcon />
			</StyledButton>

			<StyledMenu {...getMenuProps({ isOpen })}>
				{isOpen
					? options.map((item, index) => (
							<StyledMenuItem
								key={`li-${index}`}
								{...getItemProps({ item, index, isHighlighted: highlightedIndex === index, onClick: item.action })}
							>
								{item.text}
							</StyledMenuItem>
					  ))
					: null}
			</StyledMenu>
		</StyledContainer>
	);
}

ContextMenu.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			action: PropTypes.func.isRequired
		})
	).isRequired
};

export default ContextMenu;
