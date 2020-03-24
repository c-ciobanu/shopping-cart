import React from "react";
import { render } from "@testing-library/react";

import Spacer from "../index";

describe("<Spacer />", () => {
	it("Expect to not log errors in console", () => {
		const spy = jest.spyOn(global.console, "error");
		render(<Spacer size="xxl" />);
		expect(spy).not.toHaveBeenCalled();
	});

	it("Should render and match the snapshot", () => {
		const {
			container: { firstChild }
		} = render(<Spacer size="xxl" />);
		expect(firstChild).toMatchSnapshot();
	});
});
