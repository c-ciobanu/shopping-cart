import styled from "styled-components";

import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";

export const StyledList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

export const StyledListItem = styled.li`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-column-gap: 10px;
	align-items: center;
`;

export const StyledItemName = styled.p`
	margin: 0;
`;

export const StyledTrashIcon = styled(TrashIcon)`
	height: 16px;
	width: 16px;
	cursor: pointer;
`;
