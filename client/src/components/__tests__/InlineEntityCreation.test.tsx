import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InlineEntityCreation from "components/InlineEntityCreation";

describe("InlineEntityCreation", () => {
	it("should show the form input after clicking on the plus icon button", () => {
		const mockOnSubmit = jest.fn();
		const placeholder = "New entity";

		render(<InlineEntityCreation title="Create new entity" placeholder={placeholder} onSubmit={mockOnSubmit} />);

		expect(screen.queryByPlaceholderText(placeholder)).not.toBeInTheDocument();

		userEvent.click(screen.getByRole("button"));

		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it("should hide the form input on blur", () => {
		const mockOnSubmit = jest.fn();
		const placeholder = "New entity";

		render(
			<>
				<InlineEntityCreation title="Create new entity" placeholder={placeholder} onSubmit={mockOnSubmit} />

				<div>Other element</div>
			</>
		);

		userEvent.click(screen.getByRole("button"));

		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();

		userEvent.click(screen.getByText("Other element"));

		expect(screen.queryByPlaceholderText(placeholder)).not.toBeInTheDocument();
	});

	it("should trigger onSubmit correctly", async () => {
		const mockOnSubmit = jest.fn();
		const placeholder = "New entity";

		render(<InlineEntityCreation title="Create new entity" placeholder={placeholder} onSubmit={mockOnSubmit} />);

		userEvent.click(screen.getByRole("button"));

		userEvent.type(screen.getByPlaceholderText(placeholder), "Entity name");

		userEvent.click(screen.getByRole("button"));

		await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledWith("Entity name"));
	});
});
