import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "assets/svg/home.svg";
import { styled } from "stitches.config";

export const StyledNav = styled("nav", {
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "48px",
	backgroundColor: "lightgrey",
	padding: "0 5%",
	display: "flex",
	alignItems: "center"
});

export const StyledLink = styled(Link, {
	display: "contents",
	color: "inherit"
});

export default function NavBar(): JSX.Element {
	return (
		<StyledNav>
			<StyledLink to="/">
				<HomeIcon />
			</StyledLink>
		</StyledNav>
	);
}
