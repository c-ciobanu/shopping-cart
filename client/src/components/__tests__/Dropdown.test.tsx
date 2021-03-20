import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dropdown from "components/Dropdown";

describe("Dropdown", () => {
	it.skip("should trigger the items onClick function when clicking on an item", () => {
		const mockOnClick = jest.fn();

		render(<Dropdown trigger="Click me!" items={[{ text: "Item 1", onClick: mockOnClick }]} />);

		userEvent.click(screen.getByText("Click me!"));

		// FIXME: not rendered in the test env
		userEvent.click(screen.getByText("Item 1"));

		expect(mockOnClick).toHaveBeenCalled();
	});
});
