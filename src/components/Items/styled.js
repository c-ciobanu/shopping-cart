import styled from "styled-components";

import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";

export const StyledList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

export const StyledListItem = styled.li`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-column-gap: 10px;
	align-items: center;
	padding: 10px 0;
	border-bottom: 1px solid #000;

	&:last-child {
		border-bottom: 0;
	}
`;

export const StyledTrashIcon = styled(TrashIcon)`
	height: 16px;
	width: 16px;
	cursor: pointer;
`;
