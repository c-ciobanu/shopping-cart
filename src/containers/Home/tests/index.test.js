import React from "react";
import { render } from "@testing-library/react";

import Home from "../index";

describe("<Home />", () => {
	it("should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<Home />);

		expect(firstChild).toMatchSnapshot();
	});
});
