import styled from "styled-components";

export const StyledList = styled.div`
	border: 1px solid lightgrey;
	margin-bottom: 10px;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr auto;

	&:last-child {
		margin-bottom: 0;
	}
`;
