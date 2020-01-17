import React from "react";
import { Router } from "@reach/router";

import Home from "containers/Home";
import List from "containers/List";
import NotFound from "containers/NotFound";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

function App() {
	return (
		<Router>
			<Home path="/" />
			<List path="lists/:listId" />
			<NotFound default />
		</Router>
	);
}

export default App;
