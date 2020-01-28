import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import store from "store";

import Home from "../index";

describe("<Home />", () => {
	it("should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		expect(firstChild).toMatchSnapshot();
	});
});
