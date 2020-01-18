import React from "react";
import { render } from "@testing-library/react";

import List from "../index";

describe("<List />", () => {
	it("should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<List />);

		expect(firstChild).toMatchSnapshot();
	});
});
