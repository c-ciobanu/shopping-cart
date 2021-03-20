import { render } from "@testing-library/react";

import Stack from "components/Stack";

describe("Stack", () => {
	it("should render with no errors", () => {
		const spy = jest.spyOn(global.console, "error");

		render(<Stack />);

		expect(spy).not.toHaveBeenCalled();
	});
});
