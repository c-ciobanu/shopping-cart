import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "../index";

describe("<Checkbox />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<Checkbox name="test-checkbox" label="Test" />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<Checkbox name="test-checkbox" label="Test" />);
		expect(firstChild).toMatchSnapshot();
	});
});
