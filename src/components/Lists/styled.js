import styled from "styled-components";
import { Link } from "@reach/router";

export const StyledList = styled.div`
	border: 1px solid lightgrey;
	margin-bottom: 10px;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr auto;
	grid-column-gap: 10px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;
