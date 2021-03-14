import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import List from "pages/List";

import "sanitize.css";
import "sanitize.css/typography.css";
import "sanitize.css/forms.css";

export default function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>

				<Route path="/lists/:id">
					<List />
				</Route>
			</Switch>
		</Router>
	);
}
