import styled from "styled-components";
import { Link } from "@reach/router";

export const StyledList = styled.li`
	border: 1px solid lightgrey;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr auto;
	grid-column-gap: 10px;
`;

export const StyledLink = styled(Link)`
	color: inherit;
	text-decoration: none;
`;
