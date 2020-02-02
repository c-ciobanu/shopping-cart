import styled from "styled-components";
import { Link } from "@reach/router";

export const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 48px;
	background-color: lightgrey;
	padding: 0 5%;
	display: flex;
	align-items: center;
`;

export const StyledLink = styled(Link)`
	display: contents;
	color: inherit;
`;
