import styled from "styled-components";

export const StyledDiv = styled.div`
	display: grid;
	grid-row-gap: ${({ gap }) => gap};

	${({ as }) =>
		as === "ul" &&
		`
		list-style-type: none;
		margin: 0;
		padding: 0;
	`}
`;
