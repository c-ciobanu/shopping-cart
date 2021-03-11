import React from "react";

import { ReactComponent as HomeIcon } from "assets/svg/home.svg";

import { StyledNav, StyledLink } from "./styled";

function Navigation() {
	return (
		<StyledNav>
			<StyledLink to="/">
				<HomeIcon />
			</StyledLink>
		</StyledNav>
	);
}

export default Navigation;
