import NavBar from "components/NavBar";
import { renderWithRouter } from "testUtils";

describe("NavBar", () => {
	it("should render with no errors", () => {
		const spy = jest.spyOn(global.console, "error");

		renderWithRouter(<NavBar />);

		expect(spy).not.toHaveBeenCalled();
	});
});
