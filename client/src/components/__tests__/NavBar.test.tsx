import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NavBar from "components/NavBar";

describe("NavBar", () => {
	it("should render with no errors", () => {
		const spy = jest.spyOn(global.console, "error");

		render(<NavBar />, { wrapper: MemoryRouter });

		expect(spy).not.toHaveBeenCalled();
	});
});
