import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import List from "pages/List";

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
