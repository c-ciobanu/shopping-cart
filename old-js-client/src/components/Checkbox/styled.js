import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
	display: none;

	&:checked + label:before {
		top: -5px;
		left: 5px;
		width: 10px;
		border-radius: 0;
		border-color: limegreen;
		border-top-color: transparent;
		border-left-color: transparent;
		transform: rotate(45deg);
	}
`;

export const StyledLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	font: 14px/20px "Open Sans", Arial, sans-serif;
	cursor: pointer;

	&:before {
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 20px;
		height: 20px;
		border: 1px solid #000;
		transition: all 0.12s, border-color 0.08s;
	}
`;
