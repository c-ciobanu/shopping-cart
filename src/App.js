import React from "react";
import { Router } from "@reach/router";

import Home from "containers/Home";
import NotFound from "containers/NotFound";

function App() {
	return (
		<Router>
			<Home path="/" />
			<NotFound default />
		</Router>
	);
}

export default App;
