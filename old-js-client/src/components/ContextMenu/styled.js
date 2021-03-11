import styled from "styled-components";

export const StyledContainer = styled.div`
	position: relative;
	display: inline-block;
`;

export const StyledMenu = styled.ul`
	z-index: 1000;
	position: absolute;
	top: 0;
	right: 0;
	list-style: none;
	padding: 0;
	margin: 0;
	width: 150px;
	background-color: #fff;
	border: 1px solid lightgrey;
	outline: none;

	${({ isOpen }) =>
		!isOpen &&
		`
		border: 0;
	`}
`;

export const StyledMenuItem = styled.li`
	padding: 5px;
	cursor: pointer;

	${({ isHighlighted }) =>
		isHighlighted &&
		`
		background-color: lightgrey;
	`}
`;

export const StyledButton = styled.button`
	padding: 0;
	border: 0;
	outline: none;
	cursor: pointer;
`;
