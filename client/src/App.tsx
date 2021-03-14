import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { styled } from "stitches.config";
import Home from "pages/Home";
import List from "pages/List";
import NavBar from "components/NavBar";

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
						<List />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</StyledMain>
		</Router>
	);
}