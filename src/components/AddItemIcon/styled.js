import styled from "styled-components";

export const StyledInput = styled.input`
	width: 100%;
	height: 35px;
	padding: 0;
	border: 0;
	border-bottom: 1px solid limegreen;
	color: rgba(0, 0, 0, 0.87);
	outline: none;
`;

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
`;

export const StyledButton = styled.button`
	width: 35px;
	height: 35px;
	padding: 0;
	background-color: limegreen;
	color: #fff;
	border: 0;
	border-radius: 50%;
	outline: none;
	cursor: pointer;

	&:disabled {
		opacity: 0.25;
	}
`;
