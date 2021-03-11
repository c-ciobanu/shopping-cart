import React from "react";
import { Router } from "@reach/router";
import { createGlobalStyle } from "styled-components";

import Home from "containers/Home";
import List from "containers/List";
import NotFound from "containers/NotFound";
import Navigation from "containers/Navigation";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const GlobalStyle = createGlobalStyle`
  main {
		width: 90%;
		margin: 0 auto;
		padding-top: 68px;
	}
`;

function App() {
	return (
		<>
			<Navigation />

			<main>
				<Router>
					<Home path="/" />
					<List path="lists/:listId" />
					<NotFound default />
				</Router>
			</main>

			<GlobalStyle />
		</>
	);
}

export default App;
