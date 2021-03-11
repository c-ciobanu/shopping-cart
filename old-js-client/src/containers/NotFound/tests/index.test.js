import React from "react";
import { render } from "@testing-library/react";

import NotFound from "../index";

describe("<NotFound />", () => {
	it("should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<NotFound />);

		expect(firstChild).toMatchSnapshot();
	});
});
