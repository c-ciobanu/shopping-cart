import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Home from "pages/Home";
import ShoppingList from "pages/ShoppingList";
import { styled } from "stitches.config";

import "sanitize.css";
import "sanitize.css/typography.css";
import "sanitize.css/forms.css";

const StyledMain = styled("main", {
	width: "90%",
	margin: "0 auto",
	paddingTop: "68px"
});

export default function App(): JSX.Element {
	return (
		<Router>
			<NavBar />

			<StyledMain>
				<Switch>
					<Route path="/lists/:id">
						<ShoppingList />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</StyledMain>
		</Router>
	);
}
